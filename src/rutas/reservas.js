const express = require("express");

const {
  prepararAreaReservas,
  validarReserva,
} = require("../middleware/reservas");

function crearRouterReservas(controladorReservas) {
  const reservasRouter = express.Router();

  reservasRouter.use(prepararAreaReservas);

  reservasRouter.get("/", controladorReservas.listarReservas);

  reservasRouter.get("/nueva", controladorReservas.mostrarFormulario);

  reservasRouter.get("/:id", controladorReservas.mostrarDetalle);

  reservasRouter.post("/", validarReserva, controladorReservas.crearReserva);

  return reservasRouter;
}

module.exports = { crearRouterReservas };
