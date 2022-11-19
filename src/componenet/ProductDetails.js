import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AddCart } from '../redux-store/Action/ProductAction';
import LoadingSpinner from './LoadingSpinner';
import CartamountToggle from './CartamountToggle';
import {
    Slected_Products,
    removeSelectedProduct,
} from '../redux-store/Action/ProductAction';
import Star from './Star';

export default function ProductDetails() {
    // distructing
    const dispatch = useDispatch();

    let product = useSelector((state) => state.products);
    const { id, image, title, category, price, description, rating } = product;
    const [amount, setamount] = useState(1);

    const setdecrement = () => {
        amount > 1 ? setamount(amount - 1) : setamount(1);
    };
    const setincrement = () => {
        setamount(amount + 1);
    };
    const Addcard = (e) => {
        // dispatch(AddCart(e));
        dispatch(AddCart(e));
        // setamount(amount);
        // dispacth(AddCart(amount));

        console.log('amount data', amount);
    };

    const { productId } = useParams();
    const dispacth = useDispatch();
    // const Products = useSelector((state) => state);
    console.log(productId);
    // const Add = () => {};
    // console.log('Products =>', Products);
    const FetchProductDetail = async () => {
        try {
            const response = await axios
                // tempalte litterle use javasacript same line
                .get(`https://fakestoreapi.com/products/${productId}`)

                .then(function (response) {
                    console.log('Data details =>', response.data);
                    dispacth(Slected_Products(response.data));
                });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        if (productId && productId !== '') FetchProductDetail();
        dispatch(removeSelectedProduct());
    }, [productId]);
    //every time run when product id changes
    return (
        <div>
            <Navbar />
            <div className=' container mt-4 p-3'>
                {Object.keys(product).length === 0 ? (
                    <LoadingSpinner />
                ) : (
                    <div className='ui  segment '>
                        <div className='ui two column stackable center aligned grid py-3  '>
                            {/* <div className='ui vertical divider'>AND</div>ß */}
                            <div className='middle aligned row'>
                                <div
                                    className='column col-lg-12 lp '
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        className=' image'
                                        src={image}
                                        style={{
                                            width: '16rem',
                                            // alignItems: 'center',
                                            // justifyContent: 'center',
                                        }}
                                    />
                                </div>
                                <div
                                    className='column rp'
                                    style={{
                                        // width: '16rem',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <h2>{title}</h2>
                                    <h1>
                                        <Star
                                            star={rating.rate}
                                            review={rating.count}
                                        />
                                    </h1>

                                    <h2>
                                        <a className='ui teal tag label'>
                                            ${price}
                                        </a>
                                    </h2>
                                    <h2>
                                        <a className='ui teal tag label'>
                                            Total price : ${price}
                                        </a>
                                    </h2>
                                    <h3 className='ui brown block header'>
                                        {category}
                                    </h3>
                                    <p style={{ textAlign: 'justify' }}>
                                        {description}
                                    </p>
                                    {/* <h1>{amount}</h1> */}
                                    <CartamountToggle
                                        setdecrement={setdecrement}
                                        amount={amount}
                                        setincrement={setincrement}
                                    />
                                    <div
                                        className='ui vertical animated button add'
                                        tabIndex='0'
                                        onClick={() => Addcard(product)}
                                        style={{
                                            backgroundColor: 'black',
                                            color: 'white',
                                            borderRadius: '15px',
                                        }}
                                        // key={id}
                                    >
                                        <div className='hidden content'>
                                            <i
                                                className='shop icon'
                                                // style={{
                                                //     backgroundColor: 'black',
                                                // }}
                                            ></i>
                                        </div>
                                        <div
                                            className='visible content'
                                            // onClick={Addcard(product)}
                                        >
                                            Add to Cart
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
