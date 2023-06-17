# Desafío API de Tareas

**Objetivo:** Crear una API RESTful para administrar una lista de tareas (to-do list) utilizando el lenguaje de programación y el marco de trabajo de tu elección.

**Requisitos:**

1. La API debe seguir los principios REST y cumplir con los métodos CRUD (Crear, Leer, Actualizar y Eliminar) para las tareas.
2. Las tareas deben tener al menos los siguientes campos: ID, título, descripción y estado (completado/no completado).
3. La API debe permitir:
    - Crear una nueva tarea.
    - Obtener una lista de todas las tareas.
    - Obtener los detalles de una tarea específica.
    - Actualizar los detalles de una tarea existente.
    - Eliminar una tarea.
4. Utiliza una estructura de datos adecuada para almacenar las tareas (puede ser en memoria o utilizando una base de datos).
5. Implementa manejo de errores y códigos de respuesta HTTP adecuados.
6. Incluye pruebas unitarias para verificar el funcionamiento de la API.

**Puntos extra (opcional):**

- Agrega filtros para buscar tareas por estado o título.
- Implementa autenticación y autorización para proteger la API.

# Resolucion del desafio

Este proyecto implementa una API de tareas donde los usuarios pueden administrar y realizar un seguimiento de sus tareas. Permite crear, actualizar, eliminar y obtener tareas.

## Características

- Crear una nueva tarea especificando el título, la descripción, el usuario asignado y el estado.
- Actualizar una tarea existente con nuevos detalles o cambiar su estado.
- Eliminar una tarea.
- Obtener todas las tareas registradas en el sistema.
- Obtener información detallada de una tarea específica.
- Gestionar los estados de las tareas, incluyendo la creación de nuevos estados.

## Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- MySQL (Base de datos)

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta el comando `npm install` para instalar las dependencias.
3. Configura las credenciales de la base de datos en el archivo `config/db.js`. Se requieren los siguientes campos en `.env`
  - DB_NAME=app_tasks
  - DB_USERNAME=yourusername
  - DB_PASSWORD=yourpassword
  - DB_HOST=localhost
  - DB_PORT=3306
  - PORT=3000
4. Ejecuta el comando `npm run start` para iniciar el servidor.

## Uso

- La API estará disponible en `http://localhost:3000`.
- Puedes utilizar herramientas como Postman o cURL para realizar las siguientes operaciones:

### USUARIOS:
  - Crear un nuevo usuario: `POST http://localhost:3000/users/user`
  - Actualizar un usuario existente: `PUT http://localhost:3000/users/user/{id}`
  - Eliminar un usuario: `DELETE http://localhost:3000/users/user/{id}`
  - Obtener todos los usuario: `GET http://localhost:3000/users/users`
  - Obtener un usuario específico: `GET http://localhost:3000/users/user/{id}`
### TAREAS:
  - Crear una nueva tarea: `POST http://localhost:3000/tasks/task`
  - Actualizar una tarea existente: `PUT http://localhost:3000/tasks/task/{id}`
  - Eliminar una tarea: `DELETE http://localhost:3000/tasks/task/{id}`
  - Obtener todas las tareas: `GET http://localhost:3000/tasks/tasks`
  - Obtener una tarea específica: `GET http://localhost:3000/tasks/task/{id}`
  - Obtener una tarea por estado: `GET http://localhost:3000/tasks/task/state/{stateId}`
  - Obtener una tarea por usuario: `GET http://localhost:3000/tasks/task/user/{userId}`
### ESTADOS:
  - Obtener todos los estados: `GET http://localhost:3000/state/state`

## Contribución

¡Contribuciones bienvenidas! Si deseas mejorar este proyecto o complementarlo con un frontend interactivo, siéntete libre de enviar un pull request. Antes de realizar cambios significativos, por favor, abre un issue para discutir los detalles y asegurarnos de estar en la misma página.

### Contribuir con el Frontend

Si estás interesado en desarrollar el frontend para esta API de tareas, puedes seguir los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu nueva característica (`git checkout -b feature/frontend`).
3. Implementa el frontend siguiendo las mejores prácticas y las tecnologías de tu elección.
4. Realiza los cambios y realiza commits (`git commit -am 'Agrega frontend interactivo'`).
5. Sube los cambios a tu fork (`git push origin feature/frontend`).
6. Abre un Pull Request en el repositorio original.

## Licencia

Este proyecto está bajo la Licencia ISC. Puedes consultar el archivo [LICENSE](https://es.wikipedia.org/wiki/Licencia_ISC) para más detalles.
