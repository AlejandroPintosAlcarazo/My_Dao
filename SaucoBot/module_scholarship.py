from module_control import export_data
import discord
from module_control import send_account
import datetime
import pytz

async def recruit(client, message, people):
    cmd_parts = message.content.split(maxsplit=3)
    if len(cmd_parts) == 3:
        _, mention, person_id_str = cmd_parts
        try:
            person_id = int(person_id_str)
            if person_id in people:
                if people[person_id]["name"] == "None":
                    user_id = mention.strip('<@!>')
                    member = await message.guild.fetch_member(user_id)
                    if member:
                        # Chequeo si el nombre no termina con ninguna de las cadenas especificadas
                        if not (member.display_name.endswith(" | SAUCO OG") or
                                member.display_name.endswith(" | SAUCO") or
                                member.display_name.endswith(" | SAUCO CLASSIC") or
                                member.display_name.endswith(" | Sauco")):
                            name = member.display_name + " | SAUCO"
                        else:
                            name = member.display_name  # Si termina con alguna de las cadenas, se deja sin cambios
                        
                        try:
                            await member.edit(nick=name)
                            success_message = f"Nickname {member.name} edited to {name}."
                        except Exception as e:
                            success_message = f"Cant change nickname to {member.name}: {e}"

                        role_to_add_id = 1237755620669526116  # ID del rol 'scholar'
                        role_to_remove_id = 1237755182926790666  # ID del rol 'newbie'
                        role_to_add = message.guild.get_role(role_to_add_id)
                        role_to_remove = message.guild.get_role(role_to_remove_id)

                        if role_to_add and role_to_remove:
                            try:
                                await member.add_roles(role_to_add)
                                await member.remove_roles(role_to_remove)
                                success_message += f" Role '{role_to_add.name}' added and '{role_to_remove.name}' removed from {name}."
                            except Exception as e:
                                success_message += f" Error updating roles for {name}: {e}"
                        else:
                            success_message = "One or more roles not found."

                        # Actualizar la información del miembro
                        people[person_id]["name"] = name
                        people[person_id]["assist"] = [0] * 31

                        # Obtener el día actual en UTC-4 y marcar asistencia
                        utc_zone = pytz.utc
                        target_tz = pytz.timezone('Etc/GMT+4')
                        now_utc = datetime.datetime.now(utc_zone)
                        now_target = now_utc.astimezone(target_tz)
                        today = now_target.day - 1
                        people[person_id]["assist"][today] = 1

                        # Llamar a send_account antes de anunciar el reclutamiento en el canal
                        await send_account(member, people)

                        await message.channel.send(f"Hello {name}, Welcome to Sauco Guild :star2: \n ```You chose Account {person_id}\n\nPlease write this command and I will send you your email and password:\n!account\n\nPakisulat ang utos na ito at ipapadala ko sa iyo ang iyong email at password:\n!account``` \n")
                        await export_data(people)  # Asegúrate de tener esta función definida para exportar los datos actualizados

                    else:
                        await message.channel.send("Could not find a user with the ID.")
                else:
                    await message.channel.send("ID is already assigned to someone.")
            else:
                await message.channel.send("ID is not valid.")
        except ValueError:
            await message.channel.send("Please provide a valid ID number.")
    else:
        await message.channel.send("Invalid command format. Use !recruit <mention> <id>.")

    await handle_print_command(client, message.guild, people)  # Asegúrate de tener esta función definida para manejar la impresión de comandos


async def kick(client, message, people):
    cmd_parts = message.content.split(maxsplit=2)
    if len(cmd_parts) == 2:
        _, target = cmd_parts
        if target.isdigit():  # Comprobar si el target es un número
            person_id = int(target)
            if person_id in people:  # Asegurar que el person_id existe en people
                people[person_id]["name"] = "None"
                people[person_id]["assist"] = [0] * 31
                await message.channel.send(f"Account {person_id} is now available.")
                await export_data(people)  # Asegura que esta función esté definida para exportar los datos
            else:
                await message.channel.send("Could not find the user ID in the records.")
        else:  # Manejo de mención
            user_id = target.strip('<@!>')
            member = await message.guild.fetch_member(user_id)
            if member:
                name = member.display_name
                found = False
                for person_id, info in people.items():
                    if info["name"] == name:
                        people[person_id]["name"] = "None"
                        people[person_id]["assist"] = [0] * 31
                        role_to_add_id = 1237755182926790666  # ID del rol 'scholar'
                        role_to_remove_id = 1237755620669526116 # ID del rol 'newbie'
                        role_to_add = message.guild.get_role(role_to_add_id)
                        role_to_remove = message.guild.get_role(role_to_remove_id)
                        await member.add_roles(role_to_add)
                        await member.remove_roles(role_to_remove)
                        await message.channel.send(f"{name} removed from scholarship. :x: ")  # Corregido la indentación
                        found = True
                        # El resto del manejo de roles y nickname se mantiene sin cambios
                if not found:
                    await message.channel.send("Could not find the user in the records.")
            else:
                await message.channel.send("Could not find the user.")
    else:
        await message.channel.send("Invalid command format. Use !kick <mention or ID>.")

    await handle_print_command(client, message.guild, people)  # Asegúrate de tener esta función definida para manejar la impresión de comandos




async def clear_bot_messages(client,channel):
    async for message in channel.history(limit=100):  # Ajusta el límite según sea necesario
        if message.author == client.user:  # Verifica si el autor del mensaje es el bot
            await message.delete()


async def send_embeds(channel, descriptions, title=""):
    for description in descriptions:
        embed = discord.Embed(title=title, description=description, color=0x00ff00)
        await channel.send(embed=embed)


async def handle_print_command(client, guild, people):
    # Define el orden de los tipos para el sort
    type_order = {"Normal Account": 1, "Competitive": 2, "SLP Farm": 3, "AXP 2 USD":4, "Nikub Manager": 5, "Homeland Plot": 0}

    # Filtra y ordena las personas por tipo y luego por ID, excluyendo rangos específicos
    filtered_sorted_people = sorted(
        (
            (person_id, info)
            for person_id, info in people.items()
            if (person_id > 0 and person_id < 62 or 90 <= person_id)
        ),
        key=lambda x: (type_order.get(x[1]["type"], 999), x[0])
    )

    scholars_channel = discord.utils.get(guild.channels, name='🟡-scholarships')
    choose_team_channel = discord.utils.get(guild.channels, name='🟡-scholarships')

    # Asegúrate de limpiar los mensajes del bot en los canales antes de enviar nuevos mensajes
    if scholars_channel is not None:
        await clear_bot_messages(client, scholars_channel)
    if choose_team_channel is not None:
        await clear_bot_messages(client, choose_team_channel)

        
    # Genera y envía descripciones para el canal de choose team
    descriptions = [""]
    current_length = 0
    for person_id, info in filtered_sorted_people:
        if info["name"] == "None":
            line = f"[{person_id} - Account](https://app.axieinfinity.com/profile/{info.get('Ronin', '')}/axies/) {info['type']}\n"
            if current_length + len(line) > 4096:
                descriptions.append(line)
                current_length = len(line)
            else:
                descriptions[-1] += line
                current_length += len(line)

    if choose_team_channel is not None:
        await send_embeds(choose_team_channel, descriptions, "CHOOSE TEAM")
        
    # Genera y envía descripciones para el canal de scholars
    descriptions = [""]
    current_length = 0
    for person_id, info in filtered_sorted_people:
        name_part = info["name"]
        if name_part != "None":
            # Limpia el nombre si termina en los sufijos especificados
            if name_part.endswith(" | SAUCO"):
                name_part = name_part.rsplit(" | SAUCO", 1)[0]
            elif name_part.endswith(" | SAUCO"):
                name_part = name_part.rsplit(" | SAUCO", 1)[0]
            elif name_part.endswith(" | SAUCO"):
                name_part = name_part.rsplit(" | SAUCO", 1)[0]

            line = f"[{person_id} - {name_part}](https://app.axieinfinity.com/profile/{info['Ronin']}/axies/) {info['type']}\n"

            if current_length + len(line) > 4096:
                descriptions.append(line)
                current_length = len(line)
            else:
                descriptions[-1] += line
                current_length += len(line)

    if scholars_channel is not None:
        await send_embeds(scholars_channel, descriptions, "SCHOLARSHIPS")

        
async def update_all_nicknames(client, guild, people):
    # Obtiene todos los miembros del servidor
    async for member in guild.fetch_members(limit=None):
        for person_id, info in people.items():
            name = info["name"]
            # Salta las entradas donde el nombre es "None" o ya tiene el formato correcto
            if name == "None" or name == "SAUCO" or name.endswith(" | SAUCO") or name.endswith(" | SAUCO"):
                continue

            # Compara el display_name del miembro con el nombre en people
            # Si coinciden, esto asume que es la persona correcta para actualizar
            if member.display_name == name:
                # Si el nombre no termina con los sufijos deseados, actualiza
                new_nickname = name + " | SAUCO"
                try:
                    await member.edit(nick=new_nickname)
                    # Actualiza la información en people
                    info["name"] = new_nickname
                    print(f"Updated nickname for {name} to {new_nickname}.")
                except Exception as e:
                    print(f"Error updating nickname for {name}: {e}")
                break  # Sale del bucle interno una vez que se ha encontrado y actualizado el miembro


async def handle_who_command(client, people, command):
    # Suponemos que el comando viene en el formato "!who @nombre"
    _, name = command.split('@')
    name = name.strip()  # Elimina espacios en blanco alrededor del nombre

    # Encuentra a la persona por su nombre
    person_info = None
    for person_id, info in people.items():
        if info.get("name") == name:
            person_info = (person_id, info)
            break

    if person_info:
        person_id, info = person_info
        # Genera la línea de información
        line = f"[{person_id} - Account](https://app.axieinfinity.com/profile/{info.get('Ronin', '')}/axies/) {info['type']}\n"
        return line
    else:
        return "User not found."
