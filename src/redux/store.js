//podemos ver la tienda
import { createStore } from 'redux';
import parkingReducer from './reducers';

const store = createStore(parkingReducer);

export default store;
