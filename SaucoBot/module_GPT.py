import asyncio
import openai 
from openai import AsyncOpenAI
#from config import OPENAI_API_KEY
import dotenv
from dotenv import load_dotenv
import os

load_dotenv('.env')
API_KEY = os.getenv('OPENAI_API_KEY')

async def run_openai_assistant(content, autor):
    response_text = ""  # Inicializa una cadena vacía para acumular la respuesta
    client = AsyncOpenAI(api_key=API_KEY)

    stream = await client.completions.create(
        model="gpt-3.5-turbo-instruct",
        prompt=f"Please answer using the languaje that autor is using. You are Project Eri guild Assistant from Axie Infinity game, be polite, your name is Eri. {autor} is asking message starts here: {content}.",
        max_tokens=300,
        stream=True,
    )

    async for completion in stream:
        response_text += completion.choices[0].text

    # Limpieza condicional de la respuesta
    response_text = response_text.strip()  # Elimina espacios en blanco al principio y al final
    if response_text.startswith('.'):
        response_text = response_text[1:].strip()  # Elimina el punto inicial y espacios adicionales luego de él

    return response_text
