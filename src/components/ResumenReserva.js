//AQUI ESTA LA EL RESUMEN DE LA RESERVA
"use client";
import React from 'react';

const ResumenReserva = ({ reserva }) => {
  return (
    <div className="resumen-reserva">
      <h2>Resumen de Reserva</h2>
      <p>Espacio: {reserva.espacio}</p>
      <p>Duración: {reserva.duracion} horas</p>
      <p>Total: ${reserva.total}</p>
    </div>
  );
};

export default ResumenReserva;
