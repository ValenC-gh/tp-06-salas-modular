const express = require("express");
const path = require("path");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const {
  identificarSolicitud,
  medirDuracion,
} = require("./middleware/solicitudes");

const { crearRouterReservas } = require("./rutas/reservas");

function crearApp(servicioReservas, controladorReservas, configuracion) {
  const app = express();

  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  app.use(morgan(configuracion.formatoMorgan));
  app.use(identificarSolicitud);
  app.use(medirDuracion);

  app.use(expressLayouts);
  app.set("layout", "layouts/main");

  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.get("/", (req, res) => {
    res.render("inicio", {
      titulo: "Reservas de salas",
    });
  });

  app.get("/estado", (req, res) => {
    res.json({
      servicio: "activo",
      reservas: servicioReservas.contar(),
      solicitudId: res.locals.solicitudId,
    });
  });

  const reservasRouter = crearRouterReservas(controladorReservas);

  app.use("/reservas", reservasRouter);

  app.use((req, res) => {
    res.status(404).render("no-encontrado", {
      titulo: "Página no encontrada",
      mensaje: "La dirección solicitada no existe.",
    });
  });

  return app;
}

module.exports = { crearApp };
