# Sistema de Gestión de Veterinaria - Backend

Proyecto desarrollado para la gestión de pacientes veterinarios, permitiendo el registro de mascotas, dueños y síntomas con almacenamiento en la nube.

## 🛠️ Tecnologías utilizadas
* **Node.js** con **TypeScript**
* **Express** (Framework de servidor)
* **MongoDB Atlas** (Base de datos NoSQL en la nube)
* **Zod** (Validación de esquemas)
* **Mongoose** (ODM para MongoDB)

## 🚀 Instalación y uso
1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar las dependencias.
3. Configurar el archivo `.env` (ver sección de variables de entorno).
4. Iniciar el servidor con `npm run dev`.

## 📌 Endpoints Principales
* **POST `/patients`**: Crear un nuevo paciente.
* **GET `/patients`**: Listar todos los pacientes.
* **GET `/patients?species=perro`**: Filtrar pacientes por especie (Ej: perro, gato, otro).
* **PUT `/patients/:id`**: Actualizar datos de una mascota.
* **DELETE `/patients/:id`**: Eliminar un registro.

## 🔑 Variables de Entorno
Crear un archivo `.env` en la raíz con el siguiente formato:
`PORT=3000`
`URI_DB=tu_link_de_mongodb`
`JWT_SECRET=tu_clave_secreta`
`JWT_EXPIRES=1d`