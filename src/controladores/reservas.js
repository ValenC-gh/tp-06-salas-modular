function crearControladorReservas(servicioReservas) {
  function listarReservas(req, res) {
    res.render("reservas/lista", {
      titulo: "Reservas",
      reservas: servicioReservas.listar(),
    });
  }

  function mostrarFormulario(req, res) {
    res.render("reservas/nueva", {
      titulo: "Nueva reserva",
      error: null,
      valores: {},
    });
  }

  function mostrarDetalle(req, res) {
    const id = Number(req.params.id);
    const reserva = servicioReservas.buscarPorId(id);

    if (!reserva) {
      return res.status(404).render("no-encontrado", {
        titulo: "Reserva no encontrada",
        mensaje: "No existe una reserva con ese identificador.",
      });
    }

    res.render("reservas/detalle", {
      titulo: `Reserva de ${reserva.estudiante}`,
      reserva,
    });
  }

  function crearReserva(req, res) {
    servicioReservas.crear(req.reservaValidada);
    res.redirect("/reservas");
  }

  return {
    listarReservas,
    mostrarFormulario,
    mostrarDetalle,
    crearReserva,
  };
}

module.exports = { crearControladorReservas };
