import React from 'react';
import { useSelector } from 'react-redux';

export default function ProductComponent() {
    const Products = useSelector((state) => state.allProduct.products);

    const renderlist = Products.map((product) => {
        const { title, id, image, price, category } = product;
        return (
            <div className='container text-center mt-3' key={id}>
                <div className='row ' style={{}}>
                    <div className='card' style={{ width: '18rem' }}>
                        <img
                            src={image}
                            className='card-img-top'
                            alt={title}
                            style={{ height: '17rem' }}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{title}</h5>
                            <p className='card-text'>{category}</p>
                            <a href='#' className='btn btn-primary'>
                                ADD to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return <>{renderlist}</>;
}
