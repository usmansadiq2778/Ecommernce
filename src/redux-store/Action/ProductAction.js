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
const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
const AddCart = (item) => {
    return {
        type: ActionTypes.AddCart,
        payload: item,
    };
};
const deletecart = (id) => {
    return {
        type: ActionTypes.Dltcart,
        payload: id,
    };
};

export {
    Set_Products,
    Slected_Products,
    removeSelectedProduct,
    AddCart,
    deletecart,
};
