import React from 'react';
import Navbar from './Navbar';
import ProductDetails from './ProductDetails';
import ProductListining from './ProductListining';

export default function Header() {
    return (
        <div>
            <Navbar />
            <ProductListining />
        </div>
    );
}
