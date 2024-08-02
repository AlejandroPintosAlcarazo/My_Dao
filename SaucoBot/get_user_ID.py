async def update_people_with_ronin_info(people):
    url = 'https://api-gateway.skymavis.com/graphql/marketplace'
    query_template = """
    query ($roninAddress: String!) {
      publicProfileWithRoninAddress(address: $roninAddress) {
        name
        accountId
      }
    }
    """
    headers = {
        'Accept': 'application/json',
        'X-API-Key': 'SsT92sP1n0uA08LlIf4aBE8v9QCg8KfL'
    }

    async with httpx.AsyncClient() as client:
        for person_id, person_info in people.items():
            ronin_address = person_info.get('Ronin', '')  # Asegúrate de que 'Ronin' está en mayúsculas como se definió antes
            if not person_info.get('userID') and ronin_address.startswith("0x") and len(ronin_address) == 42:
                payload = {
                    "query": query_template,
                    "variables": {
                        "roninAddress": ronin_address
                    }
                }

                try:
                    response = await client.post(url, json=payload, headers=headers)
                    response.raise_for_status()
                    result = response.json()
                    print(json.dumps(result, indent=2))

                    if result and 'data' in result and result['data'] and 'publicProfileWithRoninAddress' in result['data']:
                        profile_data = result['data']['publicProfileWithRoninAddress']
                        if profile_data:
                            user_id = profile_data['accountId']
                            game_name = profile_data['name']
                            people[person_id]['userID'] = user_id
                            people[person_id]['game_name'] = game_name

                            # Update the database
                            cursor.execute(
                                """
                                UPDATE users
                                SET user_id = %s, game_name = %s
                                WHERE id = %s
                                """,
                                (user_id, game_name, person_id)
                            )
                            conn.commit()

                            print(f"Updated data for person ID: {person_id}")
                        else:
                            print(f"No valid data found for Ronin address: {ronin_address}")
                    else:
                        print(f"No valid data found for Ronin address: {ronin_address}")

                except httpx.RequestError as e:
                    print(f"HTTP request error for ID: {person_id}, Ronin address: {ronin_address} - {e}")
                except json.JSONDecodeError as e:
                    print(f"Error parsing JSON response for ID: {person_id}, Ronin address: {ronin_address} - {e}")
                except Exception as e:
                    print(f"Unexpected error for ID: {person_id}, Ronin address: {ronin_address} - {e}")

    return people
