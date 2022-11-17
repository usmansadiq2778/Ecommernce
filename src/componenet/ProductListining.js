import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { Set_Products } from '../redux-store/Action/ProductAction';
export default function ProductListining() {
    const Products = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log('Products =>', Products);
    async function getProducts() {
        try {
            const response = await axios
                .get('https://fakestoreapi.com/products')
                // .then((res) => {
                //     return res.json();
                // })

                .then(function (response) {
                    console.log('Data =>', response.data);
                    dispatch(Set_Products(response.data));
                });
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProducts();
    }, []);
    console.log('products  data=>', Products);

    return (
        <div className='container'>
            <ProductComponent />
        </div>
    );
}
