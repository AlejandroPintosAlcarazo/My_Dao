import discord
import psycopg2
from psycopg2.extras import RealDictCursor
import logging
import os

DATABASE_URL = os.getenv('DATABASE_URL')
conn = psycopg2.connect(DATABASE_URL)
cursor = conn.cursor(cursor_factory=RealDictCursor)

async def import_data(client, people):
    try:
        cursor.execute("SELECT * FROM users;")
        rows = cursor.fetchall()
        for row in rows:
            person_id = row['id']
            name = row['name']
            assist_list = [int(x) for x in row['assist'].split(',')]
            person_type = row['type']
            ronin = row['ronin']
            password = row['password']
            userID = row['user_id']
            game_name = row['game_name']
            email = row['email']
            people[person_id] = {
                'name': name,
                'assist': assist_list,
                'type': person_type,
                'Ronin': ronin,
                'password': password,
                'userID': userID,
                'game_name': game_name,
                'email': email
            }
        general_channel = discord.utils.get(client.guilds[0].channels, name='general')
        if general_channel:
            await general_channel.send("Import completed successfully.")
        logging.info("Import completed successfully.")
    except Exception as e:
        general_channel = discord.utils.get(client.guilds[0].channels, name='general')
        if general_channel:
            await general_channel.send(f"Error importing data: {e}")
        logging.error("Error importing data: %s", e)

async def export_data(people):
    try:
        for person_id, info in people.items():
            cursor.execute("""
                INSERT INTO users (id, name, type, ronin, assist, password, user_id, game_name, email)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (id) DO UPDATE SET
                name = EXCLUDED.name,
                type = EXCLUDED.type,
                ronin = EXCLUDED.ronin,
                assist = EXCLUDED.assist,
                password = EXCLUDED.password,
                user_id = EXCLUDED.user_id,
                game_name = EXCLUDED.game_name,
                email = EXCLUDED.email;
                """, (person_id, info['name'], info['type'], info['Ronin'], ','.join(map(str, info['assist'])), info['password'], info['userID'], info['game_name'], info['email']))
        conn.commit()
        logging.info("Export completed successfully.")
    except Exception as e:
        logging.error("Error exporting data: %s", e)

async def send_help_message(message):
    help_message = """
        **Available Commands**
        `!ranks` - Shows Guild leaderboard
        `!apply` - How to apply guide
        `!split` - Conditions for split
        `!account` - DM you with email and password
        `!slp` - How SLP scholarship works
        `!competitive` - How competitive scholarship works
        `!normal` - How normal scholarship works
        `!assist` - Shows the assist status of all people.
        `!assist <day>` - Show assist status for a specific day.
        `!recruit <mention> <id>` - Assigns a Discord user to a specific Scholarship.
        `!kick <mention>` - Removes a Discord user from all scholarships.
        `!help` - Shows this message.
        """
    await message.channel.send(help_message)


async def send_apply(message):
    help_message = """
**HOW TO APPLY?**

1. Open this link: 
https://discord.com/channels/1235684937961832562/1237754691077537894
2. Choose 3 axies from Vault
3. Open this link: https://discord.com/channels/1235684937961832562/1237754759398686741
4. Choose Account Number
5. Submit the following information in https://discord.com/channels/1235684937961832562/1237755048621248686 channel:
    ```
    Name: 
    Age:
    Nationality:
    Occupation:
    Favourite ORIGIN Team:
    Favourite CLASSIC Team:
    Account Number:
    Vault Axie links:
    Hours per day:
    ```
    """
    await message.channel.send(help_message)

async def split_scholar(message):
    help_message = """
    **🌟 Guild Rewards Distribution for Normal Account 🌟**

    **:point_right: How's the split?**

    **SLP Farming:**
    - Players will farm SLP tokens through daily gameplay.
    - **Initial Split (First Season):**
      - **50% of the SLP** farmed will go to the player.
      - **50% of the SLP** will be contributed to the guild for upkeep and future investments.
    - **After 1 Season:**
      - **55% of the SLP** farmed will go to the player.
      - **45% of the SLP** will be contributed to the guild.
    - **After 3 Seasons:**
      - **60% of the SLP** farmed will go to the player.
      - **40% of the SLP** will be contributed to the guild.
    - **Rewards Unlocking:** SLP rewards will be unlocked after playing for 1 month.
    - **Special Ticket:** Every 4-6 months (to be decided), you will unlock a ticket allowing you to keep all the SLP farmed during an entire season. You can craft and sell Runes and Charms as you wish, with the guild only taking the mint cost. All other profits will be yours.

    **AXS Rewards:**
    - At the end of each season, AXS rewards will be distributed.
    - **Initial Split (First Season):**
      - Players receive **40% of the AXS** earned.
      - The guild retains **60% of the AXS** for support and development.
    - **After 3 Seasons:**
      - Players receive **50% of the AXS** earned.
      - The guild retains **50% of the AXS**.
    - **After 6 Seasons:**
      - Players receive **60% of the AXS** earned.
      - The guild retains **40% of the AXS**.
    - **Top Performers:** Players who reach the top 100 or higher will receive **80% of the AXS** rewards. AXS rewards are unlocked from the start.

    **Runes and Charms (RNC):**
    - Due to ongoing changes, each season the guild will decide whether to purchase Runes and Charms or provide selected players with SLP to craft for the entire guild.

    **Tournament Earnings:**
    - **Internal Tournaments:** Players keep **75% of the rewards** from internal guild tournaments, while **25%** goes to the guild for administrative costs.
    - **External Tournaments:** Players keep **100% of the rewards** from external tournaments (donations to the guild are appreciated).

    **Additional Incentives:**
    - Active participation in guild events and activities can earn players bonus rewards.
    - High performers and top contributors may receive special recognition and additional bonuses.
    - More perks and special tickets are expected to be added over time to enhance the player experience.

    **Note:** This distribution applies to the Normal Account. Competitive and SLP accounts follow a different reward system.

    **We aim to create a balanced and rewarding environment for all our members. Let's grow and achieve greatness together!**

    **Note:** Sauco Guild reserves the right to change the rewards distribution if there is an excessive balance change in the token prices.
    """

    # Split the message into chunks of 2000 characters
    chunks = [help_message[i:i + 2000] for i in range(0, len(help_message), 2000)]

    for chunk in chunks:
        await message.channel.send(chunk)

async def slp(message):
    help_message = """
    **💰 Welcome to the SLP account, the path to great rewards! 💰**

    **:point_right: How does the SLP account work?**
    - This account is designed to maximize SLP farming.
    - You will have a dedicated team that you must use exclusively for farming.
    - Play every day and use your energy to the fullest to earn SLP.
    - Participate in guild events and activities for additional bonuses.
    - Each week, there will be a ranking to see who has farmed the most SLP within the guild.
    - The top farmers will receive special rewards and recognition within the community.
    THIS ACCOUNT IS LOCKED TILL YOU UNLOCK SOME SECRET EVENT
    """
    await message.channel.send(help_message)

async def competitive(message):
    help_message = """
    **🏆 Welcome to the Competitive account, where the best compete! 🏆**

    **:point_right: How does the Competitive account work?**
    - This account is for players who want to compete at the highest level.
    - You will receive support and resources to form the best possible team.
    - Participate in all eras and competitive events in the game.
    - The guild will provide training and advanced strategies to help you improve your performance.
    - There will be internal and external tournaments where you can showcase your skills and win big prizes.
    - You are expected to maintain high activity and consistent performance to remain part of the guild's competitive elite.
    - **You must have been a member of the guild for several months and completed certain missions that will be revealed over time.**
    THIS ACCOUNT IS LOCKED TILL YOU UNLOCK SOME SECRET EVENT
    """
    await message.channel.send(help_message)

async def normal(message):
    help_message = """
    **🎮 Welcome to your new adventure in Axie Infinity with the Normal account! 🎮**

    **:point_right: How does the Normal account work?**
    - This is the initial account for all guild members.
    - You will need to play regularly and improve your team by participating in **all Axie IP games**.
    - Complete daily and weekly missions assigned by the guild.
    - After a few months of consistent activity and improving your performance, you will be able to unlock the **SLP** and **Competitive** accounts.
    - Be active on the guild's Discord, participate in discussions, and help other members.
    - Follow the guild's rules: **do not multi-account** and **do not have accounts in other guilds**.
    """
    await message.channel.send(help_message)

async def send_account(member, people):
    member_nickname = member.display_name
    account_found = False

    for person_id, info in people.items():
        if info['name'] == member_nickname:
            email = info['email']  # Usar el email directamente
            password = info['password']
            await member.send(
                f"Welcome to Sauco Guild\n[**ACCOUNT {person_id}**](https://app.axieinfinity.com/profile/{info['Ronin']}/axies/)\n- **Email: {email}**\n- **password: {password}**\n- Send daily screenshot here https://discord.com/channels/1235684937961832562/1237754857222570086")
            account_found = True

    if not account_found:
        await member.send(
            "Welcome to Sauco Guild\nIf you are scholar use this comand on GUILD SERVER and I will send you the password:\n!account")
