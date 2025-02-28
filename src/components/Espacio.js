"use client";

import React from 'react';

const Espacio = ({ espacio }) => {
  return (
    <button className={`espacio ${espacio.ocupado ? 'ocupado' : 'disponible'}`}>
      {espacio.nombre}
    </button>
  );
};

export default Espacio;
