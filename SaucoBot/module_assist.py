import random
from datetime import datetime, timedelta
import pytz
from discord.ext import tasks
import discord
import requests
from datetime import datetime
import pprint


def register_assist(person_id, day, people):
    if person_id in people and 1 <= day <= 31:
        people[person_id]['assist'][day] = 1
    else:
        print(f"Error: ID de persona {person_id} no encontrado o día {day} inválido.")


def simulate_assist(people):
    for person_id, info in people.items():
        for day in range(32):
            info["assist"][day] = random.randint(0, 1)


async def get_battle_history(ronin_address):
    url = f"https://api-gateway.skymavis.com/classic/v1/community/users/{ronin_address}/battle-histories?limit=20"
    headers = {
        'Accept': 'application/json',
        'X-API-Key': 'SsT92sP1n0uA08LlIf4aBE8v9QCg8KfL'
    }
    response = requests.get(url, headers=headers)
    
    try:
        response.raise_for_status()
        if response.text:
            data = response.json()
        else:
            print("Respuesta vacía")
            return 0, 0, 0, 0
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
        return 0, 0, 0, 0
    except requests.exceptions.JSONDecodeError as json_err:
        print(f"JSON decode error occurred: {json_err}")
        return 0, 0, 0, 0
    except Exception as err:
        print(f"Other error occurred: {err}")
        return 0, 0, 0, 0

    now = datetime.now(pytz.utc)
    today_start = now.replace(hour=0, minute=0, second=0, microsecond=0)
    arena_wins = 0
    arena_losses = 0
    colosseum_wins = 0
    colosseum_losses = 0

    for item in data["items"]:
        created_at = datetime.fromisoformat(item["createdAt"].replace('Z', '+00:00'))
        if created_at >= today_start:
            if item["pvpType"] == "arena":
                if item["winner"] == ronin_address:
                    arena_wins += 1
                else:
                    arena_losses += 1
            elif item["pvpType"] == "colosseum":
                if item["winner"] == ronin_address:
                    colosseum_wins += 1
                else:
                    colosseum_losses += 1

    return arena_wins, arena_losses, colosseum_wins, colosseum_losses


def get_assist(people):
    max_name_length = max(len(info["name"]) for info in people.values())
    max_type_length = max(len(info["type"]) for info in people.values())
    header = f"```\nID\tName{' ' * (max_name_length - 4 + 1)}\tPercentage\t\tAssist\n"
    segment_size = 20
    reports = []

    for segment_start in range(0, len(people), segment_size):
        segment_report = header
        for person_id, info in list(people.items())[segment_start:segment_start + segment_size]:
            adjusted_name = info["name"].ljust(max_name_length)
            adjusted_type = info["type"].ljust(max_type_length)
            days_attended = sum(info["assist"])
            assist_percentage = (days_attended / len(info["assist"])) * 100
            assist_str = ''.join(map(str, info["assist"]))
            segment_report += f"{person_id:02d}\t{adjusted_name}\t{assist_percentage:.2f}%\t\t{assist_str}\n"
        segment_report += "```"
        reports.append(segment_report)

    return reports


async def count_matches_played_today(client_id, limit=20):
    def parse_matches(matches):
        current_time = datetime.now()
        adjusted_start_of_day = (current_time - timedelta(hours=current_time.hour, minutes=current_time.minute,
                                                          seconds=current_time.second,
                                                          microseconds=current_time.microsecond)) + timedelta(hours=4)
        if current_time < adjusted_start_of_day:
            adjusted_start_of_day -= timedelta(days=1)

        count = 0
        for match in matches:
            if match["gameData"]["gameMode"] == "ranked":
                ended_at_timestamp = match["gameData"]["endedAt"]
                ended_at_datetime = datetime.fromtimestamp(ended_at_timestamp)
                if ended_at_datetime >= adjusted_start_of_day:
                    count += 1
        return count

    url = f"https://api-gateway.skymavis.com/origin/v2/community/users/{client_id}/battle-logs"
    headers = {'Accept': 'application/json', 'X-API-Key': 'SsT92sP1n0uA08LlIf4aBE8v9QCg8KfL'}
    params = {'limit': limit}
    response = requests.get(url, headers=headers, params=params)
    
    try:
        response.raise_for_status()
        if response.text:
            data = response.json()
        else:
            print("Respuesta vacía")
            return 0
    except requests.exceptions.HTTPError as http_err:
        print(f"HTTP error occurred: {http_err}")
        return 0
    except requests.exceptions.JSONDecodeError as json_err:
        print(f"JSON decode error occurred: {json_err}")
        return 0
    except Exception as err:
        print(f"Other error occurred: {err}")
        return 0

    if "_items" in data and data["_items"]:
        return parse_matches(data["_items"])
    else:
        return 0


async def handle_stamina_message(message, people):
    if message.attachments:
        utc_4_tz = pytz.timezone('Etc/GMT+4')
        now_utc_4 = datetime.now(utc_4_tz)
        day_to_register = now_utc_4.day - 1
        author_id = message.author.id
        member = await message.guild.fetch_member(author_id)
        name_or_nick = member.nick if member.nick else member.name
        matched_person_ids = []

        for pid, info in people.items():
            if info['name'].lower() == name_or_nick.lower():
                matched_person_ids.append(pid)
                client_id = info['userID']
                ronin_address = info['Ronin']
                account_type = info['type']
                matches_today = await count_matches_played_today(client_id)
                arena_wins, arena_losses, colosseum_wins, colosseum_losses = await get_battle_history(ronin_address)

                if account_type == "Normal Account":
                    if arena_wins >= 4 and colosseum_losses >= 3 and colosseum_wins >= 0:
                        people[pid]["assist"][day_to_register] = 1
                        await message.add_reaction('✅')
                        await message.channel.send(f'[Account {pid} - {name_or_nick}](https://app.axieinfinity.com/profile/{ronin_address}/axies/) has played {arena_wins} arenas and {colosseum_wins} colosseum matches today. Assist Registered ✅')
                        await message.channel.send(f'Arenas: {arena_wins} wins, {arena_losses} loses')
                        await message.channel.send(f'Colosseum: {colosseum_wins} wins, {colosseum_losses} loses')
                    else:
                        await message.add_reaction('❌')
                        await message.channel.send(f'[Account {pid} - {name_or_nick}](https://app.axieinfinity.com/profile/{ronin_address}/axies/) has played only {arena_wins} arenas and {colosseum_wins} colosseum matches today ❌')
                        await message.channel.send(f'Arenas: {arena_wins} wins, {arena_losses} loses')
                        await message.channel.send(f'Colosseum: {colosseum_wins} wins, {colosseum_losses} loses')
                        await message.channel.send('Need 4 arena wins and Daily Colosseum')
                        if colosseum_losses >= 3 and colosseum_wins == 0:
                            await message.channel.send('0 wins Colosseum, next time try to win ❌')
                    
                    if account_type == "Normal Account":
                        if matches_today >= 15:
                            people[pid]["assist"][day_to_register] = 1
                            await message.add_reaction('✅')
                            await message.channel.send(f'[Account {pid} - {name_or_nick}](https://app.axieinfinity.com/profile/{ronin_address}/axies/) has played {matches_today} battles today. Assist Registered ✅')
                        else:
                            await message.add_reaction('❌')
                            await message.channel.send(f'[Account {pid} - {name_or_nick}](https://app.axieinfinity.com/profile/{ronin_address}/axies/) has played only {matches_today} battles today. Needs 12 for assistance. ❌')

                elif account_type == "Homeland Plot":
                    people[pid]["assist"][day_to_register] = 1
                    await message.add_reaction('✅')
                    await message.channel.send(f'[Account {pid} - {name_or_nick}](https://app.axieinfinity.com/profile/{ronin_address}/axies/) is working on land. Assist Registered ✅')

                else:
                    await message.add_reaction('❌')
                    await message.channel.send(f'[Account {pid} - {name_or_nick}](https://app.axieinfinity.com/profile/{ronin_address}/axies/) has not met the requirements for assistance registration.')

        if not matched_person_ids:
            await message.channel.send(f'No matches found for {name_or_nick}.')


def get_assist_by_day(day, people):
    if not 1 <= day <= 31:
        return "Day must be between 1 - 31"

    report = "```\n\tDay {}\n".format(day)
    for person_id, info in people.items():
        if info["name"] != "None":
            if info["name"].endswith(" | SAUCO"):
                name_part = info["name"].rsplit(" | SAUCO", 1)[0]
            elif info["name"].endswith(" | SAUCO"):
                name_part = info["name"].rsplit(" | SAUCO", 1)[0]
            elif info["name"].endswith(" | SAUCO"):
                name_part = info["name"].rsplit(" | SAUCO", 1)[0]
            else:
                name_part = info["name"]

            if len(info["assist"]) >= day:
                assist_status = "Yes" if info["assist"][day - 1] else "No"
                adjusted_name = name_part.ljust(20)
                report += "{}\t{}\n".format(adjusted_name, assist_status)
            else:
                print(f"Error: 'assist' list for person ID {person_id} does not cover day {day}.")
    report += "```"
    return report


async def assist(message, people):
    cmd_parts = message.content.split()
    if len(cmd_parts) == 1:
        reports = get_assist(people)
        for report in reports:
            await message.channel.send(report)
    elif len(cmd_parts) == 2:
        try:
            day = int(cmd_parts[1])
            report = get_assist_by_day(day, people)
            await message.channel.send(report)
        except ValueError:
            await message.channel.send("Por favor, introduce un número válido para el día.")


@tasks.loop(hours=24)
async def check_assistance(people, client):
    utc_zone = pytz.utc
    target_tz = pytz.timezone('Etc/GMT+4')
    now_utc = datetime.now(utc_zone)
    now_target = now_utc.astimezone(target_tz)
    yesterday = (now_target - timedelta(days=1)).day - 1
    today = (now_target - timedelta(days=0)).day - 1

    message_content = (
        "**🚫 Daily Stamina Check  🚫**\n\n"
        "Screenshot: https://discord.com/channels/1235684937961832562/1237754857222570086\n\n"
        "<@&1237755620669526116>\n"
        "`3 DAYS IN A ROW TO KICK SCHOLAR`\n\n"
        "`AFK Report:`\n"
    )

    excluded_names = [
        "Eri | Projects Eri", "hyun | Projects Eri", "Axie Porco | Projects Eri",
        "Hated | Projects Eri", "Rudeus | Project Eri", "Kaio | Project Eri", "Ken-chan | Project Eri", "Taiga? | Projects Eri", "CJ | Projects Eri","MrCasanovie | Projects Eri", "Jenny | Project Eri", "EXCUSEMEBOSS | Projects Eri"
    ]

    for person_id, info in people.items():
        if info["name"] and info["name"] != "None" and info["name"] not in excluded_names:
            assist_array = info["assist"]
            name_part = info["name"].split(" | ")[0]

            if assist_array[today] != 1:
                if assist_array[yesterday] == 0:
                    days_afk = 1
                    for day in range(yesterday - 1, 0, -1):
                        if assist_array[day] == 0:
                            days_afk += 1
                        else:
                            break

                    message_content += f"`{name_part}: {days_afk} day(s) AFK `\n"

    if message_content:
        channel = discord.utils.get(client.get_all_channels(), name='⛔-warning-scholars')
        if channel:
            for i in range(0, len(message_content), 2000):
                await channel.send(message_content[i:i + 2000])
