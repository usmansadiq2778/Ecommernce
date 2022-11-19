import { combineReducers } from 'redux';
import {
    ProductReducer,
    slectedProductreducer,
    Cartreducer,
} from './ProductReducer';
const reducers = combineReducers({
    allProduct: ProductReducer,
    products: slectedProductreducer,
    Cartreducer: Cartreducer,
});
export { reducers };
