import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { Set_Products } from '../redux-store/Action/ProductAction';
import LoadingSpinner from './LoadingSpinner';
export default function ProductListining() {
    const Products = useSelector((state) => state);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    console.log('Products =>', Products);
    async function getProducts() {
        try {
            setIsLoading(true);
            const response = await axios
                .get('https://fakestoreapi.com/products')
                // .then((res) => {
                //     return res.json();
                // })

                .then(function (response) {
                    console.log('Data =>', response.data);
                    dispatch(Set_Products(response.data));
                    setIsLoading(false);
                });
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        getProducts();
        // disabled={isLoading}
    }, []);
    console.log('products  data=>', Products);

    return (
        <div className='container'>
            {isLoading ? <LoadingSpinner /> : <ProductComponent />}
        </div>
    );
}
