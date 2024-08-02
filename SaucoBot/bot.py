import discord
import pandas as pd
import logging
from discord.ext import commands, tasks
from datetime import datetime
import pytz
import psycopg2  # Asegúrate de importar psycopg2
from psycopg2.extras import RealDictCursor
import openai
from dotenv import load_dotenv
import os
import re
from module_control import export_data, import_data, send_help_message, send_account, send_apply, split_scholar, slp, normal, competitive
from module_assist import get_assist, handle_stamina_message, get_assist_by_day, assist, check_assistance
from module_scholarship import kick, recruit, handle_print_command, update_all_nicknames, handle_who_command
from module_leaderboard import fetch_leaderboard_data_for_people
from get_user_ID import update_people_with_ronin_info
from module_GPT import run_openai_assistant
from readcsv import read_csv_locally, write_csv_locally

load_dotenv('.env')

TOKEN = os.getenv('BOT_TOKEN')
DATABASE_URL = os.getenv('DATABASE_URL')

# Intenta conectar a la base de datos
try:
    conn = psycopg2.connect(DATABASE_URL)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    logging.info("Database connection established.")
except Exception as e:
    logging.error("Failed to connect to the database: %s", e)
    raise

def create_tables():
    commands = (
        """
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255),
            type VARCHAR(255),
            ronin VARCHAR(255),
            assist TEXT,
            password VARCHAR(255),
            user_id VARCHAR(255),
            game_name VARCHAR(255),
            email VARCHAR(255)
        )
        """,
    )
    for command in commands:
        cursor.execute(command)
    conn.commit()

create_tables()

def load_csv_to_db(csv_path):
    df = pd.read_csv(csv_path)
    for index, row in df.iterrows():
        cursor.execute("""
            INSERT INTO users (id, name, type, ronin, assist, password, user_id, game_name, email)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            ON CONFLICT (id) DO NOTHING;
            """, (row['ID'], row['name'], row['type'], row['ronin'], row['assist'], row['password'], row['user_id'], row['game_name'], row['email']))
    conn.commit()

# Ruta al archivo CSV
csv_path = 'assist.csv'
load_csv_to_db(csv_path)

# Inicializar el diccionario people
people = {}
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
for row in rows:
    people[row['id']] = {
        'name': row['name'],
        'type': row['type'],
        'ronin': row['ronin'],
        'assist': row['assist'],
        'password': row['password'],
        'user_id': row['user_id'],
        'game_name': row['game_name'],
        'email': row['email']
    }

intents = discord.Intents.default()
intents.message_content = True
intents.members = True  # Habilita el intent para eventos de miembros del gremio

bot = commands.Bot(command_prefix='!', intents=intents)

# ID del rol permitido
ALLOWED_ROLE_ID = 1240618271485464607
ALLOWED_ROLE_ID2 = 1237755620669526116
ALLOWED_ROLE_ID3 = 1237755182926790666
keywords = re.compile(r'\b(apply|application|scholar|scholarship|join|register|sign up|enroll|membership|participate|interest|candidate|submission|applicant|recruit|application form|interested in joining|how to join|apply for|become a member|joining process|enrollment|signing up|registration)\b', re.IGNORECASE)

# Configura la zona horaria de Madrid
utc_4_tz = pytz.timezone('Etc/GMT+4')

# Obtén la fecha y hora actuales en UTC-4
now_utc_4 = datetime.now(utc_4_tz)

# Imprime la hora actual
print(f"Hora actual en Axie: {now_utc_4.strftime('%Y-%m-%d %H:%M:%S')}")

logging.basicConfig(level=logging.INFO)

@tasks.loop(hours=24)
async def check_assistance_task():
    await check_assistance(people, bot)

@bot.event
async def on_ready():
    print(f'We have logged in as {bot.user}')
    logging.info('Bot logged in as %s', bot.user)
    await import_data(bot, people)
    await update_people_with_ronin_info(people)

    for guild in bot.guilds:
        print(f"- {guild.name} (ID: {guild.id})")
        await update_all_nicknames(bot, guild, people)
        await handle_print_command(bot, guild, people)

    await export_data(people)
    check_assistance_task.start()

@bot.event
async def on_member_join(member):
    role_id = 1237755182926790666  # Reemplaza esto con el ID real de tu rol
    role = member.guild.get_role(role_id)  # Obtiene el objeto de rol basado en su ID

    if role:
        await member.add_roles(role)  # Asigna el rol al miembro

    try:
        await send_apply(member)
    except Exception as e:
        print("Cant send apply msg")
        logging.error("Cant send apply msg: %s", e)

@bot.command(name='showcsv')
async def show_csv(ctx):
    df = read_csv_locally()
    if df.empty:
        await ctx.send("El CSV está vacío o no se pudo leer.")
    else:
        csv_content = df.head().to_string(index=False)
        await ctx.send(f"Contenido del CSV:\n```\n{csv_content}\n```")

@bot.command(name='updateUserID')
async def update_user_id_command(ctx):
    await ctx.send("Updating user IDs...")
    await update_people_with_ronin_info(people)
    await ctx.send("User IDs updated.")

@bot.event
async def on_message(message):
    if message.author == bot.user:
        return

    if isinstance(message.channel, discord.DMChannel):
        return

    member = message.author
    roles = [role.id for role in member.roles]
    allowed_roles = (ALLOWED_ROLE_ID, ALLOWED_ROLE_ID2, ALLOWED_ROLE_ID3)

    await bot.process_commands(message)  # Asegúrate de procesar los comandos antes de cualquier otra lógica

    if message.content.startswith('!restart'):
        await import_data(bot, people)
        await update_people_with_ronin_info(people)
        for guild in bot.guilds:
            print(f"- {guild.name} (ID: {guild.id})")
            await update_all_nicknames(bot, guild, people)
            await handle_print_command(bot, guild, people)
        await export_data(people)
        print("Restart Done\n")
    elif (keywords.search(message.content) and all(allowed_role not in roles for allowed_role in allowed_roles)) or message.content.startswith('!apply'):
        await send_apply(message)
    elif message.content.startswith('!check'):
        await check_assistance(people, bot)
    elif message.content.startswith('!ranks'):
        await fetch_leaderboard_data_for_people(message, people)
    elif message.content.startswith('!slp'):
        await slp(message)
    elif message.content.startswith('!competitive'):
        await competitive(message)
    elif message.content.startswith('!normal'):
        await normal(message)
    elif message.content.startswith('!account'):
        await send_account(message.author, people)
    elif message.content.startswith('!assist'):
        await assist(message, people)
    elif message.content.startswith('!recruit'):
        if ALLOWED_ROLE_ID in roles:
            await recruit(bot, message, people)
        else:
            await message.channel.send("No tienes permiso para usar este comando.")
    elif message.content.startswith('!kick'):
        if ALLOWED_ROLE_ID in roles:
            await kick(bot, message, people)
        else:
            await message.channel.send("No tienes permiso para usar este comando.")
    elif message.content.startswith('!export') and ALLOWED_ROLE_ID in roles:
        await export_data(people)
    elif message.content.startswith('!import') and ALLOWED_ROLE_ID in roles:
        await import_data(bot, people)
    elif message.content.startswith('!who'):
        await handle_who_command(bot, people, message)
    elif message.content.startswith('!print') and ALLOWED_ROLE_ID in roles:
        await handle_print_command(bot, message.guild, people)
    elif message.content.startswith('!help'):
        await send_help_message(message)
    elif message.content.startswith('!split'):
        await split_scholar(message)
    elif message.channel.name == '⚡-stamina-track':
        await handle_stamina_message(message, people)
        await export_data(people)
    elif message.content.startswith('Sau'):
        message.content = message.content[len('Sau '):].strip()
        try:
            response = await run_openai_assistant(message.content, message.author)
            await message.channel.send(response)
        except openai.error.RateLimitError:
            await message.channel.send("Failed to complete the request due to rate limits.")
        except openai.error.OpenAIError as e:
            await message.channel.send(f"OpenAI API error: {e}")

# Asegúrate de que esta línea esté al final del archivo
bot.run(TOKEN)
