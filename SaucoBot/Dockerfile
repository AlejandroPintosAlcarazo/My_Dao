# Usar una imagen base oficial de Python
FROM python:3.12

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los requisitos de la aplicación a la carpeta de trabajo
COPY requirements.txt .

# Instalar las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Definir la variable de entorno
ENV DATABASE_URL=postgresql://user:password@db:5432/mydatabase

# Comando para ejecutar la aplicación
CMD ["python", "bot.py"]
