import React from 'react';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import ProductListining from './ProductListining';
import { useSelector } from 'react-redux';

export default function Header() {
    const carddata = useSelector((state) => state.Cartreducer);
    console.log('card data  card wala', carddata);
    return (
        <div>
            <Navbar />

            <ProductListining />
        </div>
    );
}
