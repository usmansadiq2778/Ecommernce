import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductDetails() {
    const Products = useSelector((state) => state);
    console.log('Products =>', Products);
    return <div>ProductDetails</div>;
}
