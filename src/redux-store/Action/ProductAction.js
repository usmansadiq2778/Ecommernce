import { ActionTypes } from '../contants/ActionTypes';

const Set_Products = (products) => {
    return {
        type: ActionTypes.Set_Products,
        payload: products,
    };
};

const Slected_Products = (products) => {
    return {
        type: ActionTypes.Slected_Products,
        payload: products,
    };
};

export { Set_Products, Slected_Products };
