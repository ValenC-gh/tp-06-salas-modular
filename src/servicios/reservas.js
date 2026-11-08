function crearServicioReservas(datosIniciales) {
  const reservas = [...datosIniciales];

  function listar() {
    return reservas;
  }

  function buscarPorId(id) {
    return reservas.find((reserva) => reserva.id === id);
  }

  function contar() {
    return reservas.length;
  }

  function crear(datos) {
    const ultimoId = reservas.reduce(
      (mayorId, reserva) => Math.max(mayorId, reserva.id),
      0,
    );

    const nuevaReserva = { id: ultimoId + 1, ...datos };

    reservas.push(nuevaReserva);

    return nuevaReserva;
  }

  return { listar, buscarPorId, contar, crear };
}

module.exports = { crearServicioReservas };
