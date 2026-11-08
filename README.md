Trabajo Practico Nro6

Este proyecto parte del TP Nro 5 de reservas de salas de estudio

El objetivo del TP 6 es reorganizar el código en diferentes módulos, conservando las mismas rutas, vistas, validaciones y respuestas HTTP.

En el TP 05 la mayor parte del código estaba dentro de src/index.js
Ahora cada módulo tiene una responsabilidad específica.


Para instalar las dependencias:

npm install

npm start

la aplicación funciona en:
http://localhost:3000

Para comprobar el formato y analizar el código:

npm run format
npm run check

Mapa de módulos y dependencias

- src/index.js: prepara los datos, crea las dependencias e inicia el servidor.
- src/configuracion.js: obtiene y valida las variables de entorno.
- src/app.js: configura Express, las vistas, los middleware y las rutas.
- src/rutas/reservas.js: relaciona las rutas con sus controladores.
- src/controladores/reservas.js: procesa solicitudes y genera respuestas HTTP.
- src/servicios/reservas.js: administra las reservas en memoria.
- src/middleware/reservas.js: prepara la sección y valida el formulario.
- src/middleware/solicitudes.js: identifica las solicitudes y mide su duración.

Las rutas inexistentes responden con una página HTML y código 404.





