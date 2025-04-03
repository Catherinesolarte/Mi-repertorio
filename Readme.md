Echale un vistazo: https://mirepertorionodejs.netlify.app/

La escuela de música E-Sueño está buscando desarrollar un sistema para gestionar el repertorio de canciones que sus estudiantes interpretarán en presentaciones en vivo. Se requiere construir un servidor en Node.js utilizando Express y PostgreSQL para manejar un CRUD completo sobre una base de datos de canciones.

En este desafío, deberás construir un servidor que:

Se conecte a una base de datos PostgreSQL.
Permita realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre la tabla de canciones.
Vista del Diseño
Aquí puedes ver la imagen del diseño que se utilizó como referencia:

![Captura de pantalla 2025-04-02 200235](https://github.com/user-attachments/assets/9902555e-bb18-465e-b0fc-49876b35e694)


![Captura de pantalla 2025-04-02 200319](https://github.com/user-attachments/assets/656681f1-2619-43f6-96f3-db24b3f14fbb)


![Captura de pantalla 2025-04-02 200354](https://github.com/user-attachments/assets/8da7ad8e-6ed7-46c5-a910-6103f6997571)


Requerimientos
Ruta POST /cancion:

Descripción: Recibe los datos de una canción y realiza la inserción en la tabla canciones de la base de datos.
Ruta GET /canciones:

Descripción: Devuelve un JSON con todos los registros de la tabla canciones.
Ruta PUT /cancion:

Descripción: Recibe los datos de una canción para actualizar y realiza la actualización en la tabla canciones.
Ruta DELETE /cancion:

Descripción: Recibe por queryString el id de una canción y la elimina de la base de datos.
Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript en el servidor.
Express: Framework para Node.js que facilita la creación y manejo del servidor y las rutas.
pg: Paquete para interactuar con bases de datos PostgreSQL desde Node.js.
PostgreSQL: Sistema de gestión de bases de datos relacional utilizado para almacenar los datos de las canciones.
Autor
