import { combineReducers } from 'redux';
import { ProductReducer } from './ProductReducer';
const reducers = combineReducers({
    allProduct: ProductReducer,
});
export { reducers };
