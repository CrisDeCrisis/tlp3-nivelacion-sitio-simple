# Proyecto de Nivelación

Este proyecto consiste en una aplicación web simple que permite al usuario ingresar texto, enviarlo a un servidor backend y mostrar la respuesta en un cuadro de diálogo. Además, el cuadro de diálogo tiene la funcionalidad de cambiar de color.

## Estructura del Proyecto

## Instalación

### Backend (Node.js)

1. Navega al directorio `back_js`:

   ```sh
   cd back_js
   ```

2. Instala las dependencias:

   ```sh
   npm install
   ```

3. Inicia el servidor:
   ```sh
   npm run dev
   ```

### Backend (Python)

1. Navega al directorio `back_py`:

   ```sh
   cd back_py
   ```

2. Instala las dependencias:

   ```sh
   pip install fastapi uvicorn
   ```

3. Inicia el servidor:
   ```sh
   uvicorn app:app --reload
   ```

### Frontend

1. Abre el archivo `index.html` en tu navegador.

## Uso

1. Ingresa un texto en el campo de entrada y presiona "Enter".
2. El texto será enviado al servidor y la respuesta se mostrará en un cuadro de diálogo.
3. Puedes cambiar el color del cuadro de diálogo usando el botón "Color".
4. Puedes cerrar el cuadro de diálogo usando el botón "Cerrar".

## Tecnologías Utilizadas

- Node.js con Express
- Python con FastAPI
- HTML, CSS y JavaScript para el frontend
