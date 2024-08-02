import requests
import discord


async def fetch_leaderboard_data_for_people(message, people):
    url = "https://api-gateway.skymavis.com/origins/v2/leaderboards"

    headers = {
        'Accept': 'application/json',
        'X-API-Key': 'SsT92sP1n0uA08LlIf4aBE8v9QCg8KfL'
    }

    results = []

    for person_id, person_info in people.items():
        if person_info['name'] != "None" and person_info['userID'] and person_info['type']!= "Competitive Classic":
            params = {'userID': person_info['userID']}
            response = requests.get(url, headers=headers, params=params)
            if response.status_code == 200:
                data = response.json()
                print("holaaaaa")
                if data['_items']:
                    first_item = data['_items'][0]
                    result = (first_item['topRank'],
                              f":trophy:`Rank {first_item['topRank']} {first_item['rank']}` [{first_item['name']}](https://app.axieinfinity.com/profile/{person_info['Ronin']}/axies/) ★{first_item['vstar']}★ ")
                    results.append(result)
            else:
                print(f"Failed to fetch data for {person_info['name']}. Status Code: {response.status_code}")
        else:
            print(f"Skipping person with ID {person_id} due to missing or invalid information.")

    sorted_results = sorted(results, key=lambda x: x[0])
    formatted_results = [result[1] for result in sorted_results]

    # Envía los resultados en mensajes separados si el contenido supera el límite de longitud
    message_content = ""
    for result in formatted_results:
        if len(message_content) + len(result) + 1 > 1800:  # +1 por el salto de línea
            await message.channel.send(message_content)
            message_content = result + "\n"  # Comienza un nuevo mensaje
        else:
            message_content += result + "\n"

    if message_content:  # Envía cualquier contenido restante
        await message.channel.send(message_content)
