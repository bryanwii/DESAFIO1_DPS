const initialState = {
  espacios: [],
  total: 0,
};
//FUNCIONES DE REDUCTOR Y CARGAR ESPACIOS
const parkingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESERVAR_ESPACIO':
      return {
        ...state,
        espacios: state.espacios.map(espacio =>
          espacio.id === action.payload.id ? { ...espacio, ocupado: true } : espacio
        ),
        total: state.total + action.payload.costo,
      };
    case 'CARGAR_ESPACIOS':
      return {
        ...state,
        espacios: action.payload,
      };
    default:
      return state;
  }
};

export default parkingReducer;
