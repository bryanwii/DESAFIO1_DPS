"use client";

import React from 'react';
import Espacio from './Espacio';

const PlanoParqueo = ({ espacios }) => {
  return (
    <div className="plano-parqueo">
      {espacios.map((espacio) => (
        <Espacio key={espacio.id} espacio={espacio} />
      ))}
    </div>
  );
};

export default PlanoParqueo;
