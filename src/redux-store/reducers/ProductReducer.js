import { ActionTypes } from '../contants/ActionTypes';
const initial_state = {
    products: [],
    carts: [],
};
const ProductReducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case ActionTypes.Set_Products:
            return { ...state, products: payload };

        default:
            return state;
    }
};

const slectedProductreducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.Slected_Products:
            //distructor the payload
            return { ...state, ...payload };

        default:
            //if default case state back
            return state;
    }
};
const Cartreducer = (state = initial_state, { type, payload }) => {
    switch (type) {
        case ActionTypes.AddCart:
            //distructor the payload
            return {
                ...state,
                carts: [...state.carts, payload],
            };

        case ActionTypes.Dltcart:
            const data = state.carts.filter((e) => e.id !== payload);
            return {
                ...state,
                carts: data,
            };
        default:
            //if default case state back
            return state;
    }
};
export { ProductReducer, slectedProductreducer, Cartreducer };
