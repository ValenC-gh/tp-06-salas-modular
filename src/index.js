const { crearServicioReservas } = require("./servicios/reservas");

const { crearControladorReservas } = require("./controladores/reservas");

const { crearApp } = require("./app");

const { obtenerConfiguracion } = require("./configuracion");

const reservas = [
  {
    id: 1,
    estudiante: "Lucía Fernández",
    email: "lucia@correo.com",
    sala: "Sala Azul",
    fecha: "2026-06-02",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "Mateo Ríos",
    email: "mateo@correo.com",
    sala: "Sala Verde",
    fecha: "2026-06-02",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Sofía Benítez",
    email: "sofia@correo.com",
    sala: "Sala Estudio",
    fecha: "2026-06-03",
    turno: "Noche",
    personas: 1,
  },
  {
    id: 4,
    estudiante: "Tomás Aguirre",
    email: "tomas@correo.com",
    sala: "Sala Azul",
    fecha: "2026-06-03",
    turno: "Tarde",
    personas: 5,
  },
];

function main() {
  const configuracion = obtenerConfiguracion();

  const servicioReservas = crearServicioReservas(reservas);

  const controladorReservas = crearControladorReservas(servicioReservas);

  const app = crearApp(servicioReservas, controladorReservas, configuracion);

  app.listen(configuracion.puerto, () => {
    console.log(
      `Servidor funcionando en http://localhost:${configuracion.puerto}`,
    );
  });
}

main();
