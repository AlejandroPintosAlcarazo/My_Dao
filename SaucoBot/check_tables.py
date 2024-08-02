import os
import psycopg2
from psycopg2.extras import RealDictCursor
from dotenv import load_dotenv

load_dotenv('.env')

DATABASE_URL = os.environ.get('DATABASE_URL')
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cursor = conn.cursor(cursor_factory=RealDictCursor)

cursor.execute("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
tables = cursor.fetchall()
print(tables)
