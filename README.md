# API de Gestión Veterinaria - UTN

Este proyecto es una API REST desarrollada con el stack MERN (enfocado en Backend) para la gestión de pacientes en una veterinaria.

## Requisitos Técnicos Cumplidos
- **Lenguaje:** TypeScript
- **Framework:** Express
- **Base de Datos:** MongoDB con Mongoose (Atlas)
- **Validación:** Zod
- **Seguridad:** Hash de contraseñas con bcryptjs y protección de rutas con JWT.
- **Arquitectura:** Patrón MVC (Model-View-Controller).

##  Requisito de Investigación: Filtrado por Query Params
Se implementó un sistema de filtrado dinámico en el endpoint de pacientes. El cliente puede recuperar datos específicos utilizando parámetros de búsqueda en la URL.
- **Ejemplo:** `GET /patients?species=perro` devolverá únicamente las mascotas cuya especie coincida con la búsqueda.

## Instalación
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Crear un archivo `.env` basado en `.env.example`.
4. Ejecutar `npm run dev` para iniciar el modo desarrollo.

##  Endpoints
- **Auth:** `/auth/register` y `/auth/login`
- **Pacientes (Protegidos):**
  - `POST /patients` - Crear mascota.
  - `GET /patients` - Listar todos (acepta `?species=`).
  - `PUT /patients/:id` - Actualizar.
  - `DELETE /patients/:id` - Eliminar.