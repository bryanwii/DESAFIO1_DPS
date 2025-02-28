export const reservarEspacio = (id, costo) => ({
  type: 'RESERVAR_ESPACIO',
  payload: { id, costo },
});

export const cargarEspacios = (espacios) => ({
  type: 'CARGAR_ESPACIOS',
  payload: espacios,
});
