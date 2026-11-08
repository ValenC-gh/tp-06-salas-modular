function prepararAreaReservas(req, res, next) {
  res.locals.seccion = "Reservas de salas";
  next();
}

const salasPermitidas = ["Sala Azul", "Sala Verde", "Sala Estudio"];
const turnosPermitidos = ["Mañana", "Tarde", "Noche"];

function validarReserva(req, res, next) {
  const estudiante = String(req.body.estudiante ?? "").trim();
  const email = String(req.body.email ?? "").trim();
  const sala = String(req.body.sala ?? "").trim();
  const fecha = String(req.body.fecha ?? "").trim();
  const turno = String(req.body.turno ?? "").trim();
  const personas = Number(req.body.personas);

  const hayError =
    !estudiante ||
    !email.includes("@") ||
    !salasPermitidas.includes(sala) ||
    !fecha ||
    !turnosPermitidos.includes(turno) ||
    !Number.isInteger(personas) ||
    personas < 1 ||
    personas > 6;

  if (hayError) {
    return res.status(400).render("reservas/nueva", {
      titulo: "Nueva reserva",
      error:
        "Revisá los datos: todos los campos son obligatorios y deben ser válidos.",
      valores: req.body,
    });
  }

  req.reservaValidada = { estudiante, email, sala, fecha, turno, personas };
  next();
}

module.exports = { prepararAreaReservas, validarReserva };
