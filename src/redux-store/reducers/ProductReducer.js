import { ActionTypes } from '../contants/ActionTypes';
const initial_state = {
    products: [],
};
const ProductReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case ActionTypes.Set_Products:
            return { ...state, products: payload };

        default:
            return state;
    }
};

export { ProductReducer };
