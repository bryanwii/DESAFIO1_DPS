"use client";
//SELECIONA LA ZONA 
import React from 'react';

const SelectorZona = ({ zonas, onSelect }) => {
  return (
    <div className="selector-zona">
      <h2>Selecciona una Zona</h2>
      {zonas.map((zona) => (
        <button key={zona} onClick={() => onSelect(zona)}>
          {zona}
        </button>
      ))}
    </div>
  );
};

export default SelectorZona;
