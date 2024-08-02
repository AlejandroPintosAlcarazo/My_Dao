import pandas as pd
import logging

# Configurar logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s:%(message)s')

file_name = 'assist.csv'

def read_csv_locally():
    try:
        logging.info("Intentando leer el CSV localmente")
        df = pd.read_csv(file_name)
        logging.info("CSV leído exitosamente")
        return df
    except Exception as e:
        logging.error(f"Error al leer el archivo: {e}")
        return pd.DataFrame()

def write_csv_locally(df):
    try:
        logging.info("Intentando guardar el CSV localmente")
        df.to_csv(file_name, index=False)
        logging.info("Archivo guardado exitosamente")
    except Exception as e:
        logging.error(f"Error al guardar el archivo: {e}")
