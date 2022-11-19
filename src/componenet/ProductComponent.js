import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Star from './Star';
import { AddCart } from '../redux-store/Action/ProductAction';
import LoadingSpinner from './LoadingSpinner';
import fb from '../images/fb-top.png';
import twitter from '../images/twitter-top.png';
import instagram from '../images/instagram-top.png';
import Linkin from '../images/linkedin-top.png';
import '../style.css';

export default function ProductComponent() {
    ///// use slector is use to help get state value from redcuer
    const Products = useSelector((state) => state.allProduct.products);
    // const [isLoading, setIsLoading] = useState();
    // const getdata = useSelector((state) => state.Cartreducer.carts);

    // console.log(getdata);

    // use to render the action funtion
    const dispatch = useDispatch();

    const Addcard = (e) => {
        dispatch(AddCart(e));
        // console.log('chl rha hu kia tenstion ha', e);
    };

    // console.log('e cart + wala data =>', AddCart());

    const renderlist = Products.map((product) => {
        const { title, id, image, price, category, rating } = product;
        return (
            <div className='my-3 ' key={id}>
                <div
                    style={{
                        // display: 'inline',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {/* <Link id='RouterNavLink' to={`/product/${id}`}> */}
                    <div
                        className='card   text-center overflow-hidden shadow mx-2 mb-4 py-3  '
                        style={{
                            width: '18rem',
                            height: 'auto',
                            borderRadius: 20,
                            // maxWidth: '100%',

                            // height: '400px',
                            // border: 'none',
                        }}
                    >
                        <div
                            style={{
                                background: 'white',
                                height: '15rem',

                                overflow: 'hidden',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 'inherit',
                            }}
                        >
                            <Link id='RouterNavLink' to={`/product/${id}`}>
                                <div style={{ width: '9rem' }}>
                                    <img
                                        src={image}
                                        className='card-img-top img-fluid'
                                        alt={title}
                                        // style={{ height: '16rem' }}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='card-body '>
                            <h4
                                className='card-title '
                                style={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {title}
                            </h4>
                            <h6>
                                <Star
                                    star={rating.rate}
                                    review={rating.count}
                                />
                            </h6>
                            <p className='card-text'>${price}</p>
                            <p className='card-text'>{category}</p>
                            <button
                                className='btn btn-primary col-lg-12 col-12'
                                style={{
                                    display: 'inline',
                                    background: 'red',
                                    border: 'none',
                                    borderRadius: 13,
                                }}
                                onClick={() => Addcard(product)}
                            >
                                ADD to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <>
            <div className='mt-5'>
                <h1>Product Details</h1>{' '}
            </div>

            <div className='d-flex flex-wrap justify-content-center my-5'>
                {
                    // isLoading ? <LoadingSpinner /> :

                    renderlist
                }
            </div>
            <div
                className='container mt-4 mb-4 my-7  mainfooter'
                style={{
                    backgroundColor: 'whitesmoke',
                    padding: 45,
                    paddingBottom: '45px',
                    marginBottom: '55px',
                }}
            >
                <div
                    className='row footer  '
                    style={{
                        // justifyContent: 'center',
                        // alignItems: 'center',
                        marginTop: '40px',
                        marginBottom: '55px',
                    }}
                >
                    <div className='col-sm-3'>
                        <h6
                            style={{
                                color: 'black',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                marginBottom: '29px',
                            }}
                        >
                            •MADE FOR YOU•
                        </h6>
                        <p
                            style={{
                                textAlign: 'justify',
                                paddingBottom: 20,
                            }}
                        >
                            In each of our designs, we envision you, our client.
                            We wish to create clothes that best suit your
                            lifestyle and body. Our motto is that every woman
                            deserves comfortable luxury clothing.
                        </p>
                        <span className='mx-3 my-5'>
                            <a href=''>
                                <img src={fb} alt='' />
                            </a>
                        </span>
                        <span className='mx-3 my-5'>
                            <a href=''>
                                <img src={instagram} alt='' />
                            </a>
                        </span>
                        <span className='mx-3 my-5'>
                            <a href=''>
                                <img src={Linkin} alt='' />
                            </a>
                        </span>
                        <span className='mx-3 my-5'>
                            <a href=''>
                                <img src={twitter} alt='' />
                            </a>
                        </span>
                    </div>
                    <div
                        className='col-sm-3'
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                        }}
                    >
                        <ul
                            style={{
                                textAlign: 'justify',
                                listStyle: 'none',
                                marginTop: 15,
                                marginBottom: 25,
                                // padding: 10,
                            }}
                        >
                            <li>
                                <a href=''>Our story</a>
                            </li>
                            <li>
                                <a href=''>Sustainable Statement</a>
                            </li>
                            <li>
                                <a href=''>Rewards Club</a>
                            </li>
                            <li>
                                <a href=''>Give $30 Get $30!</a>
                            </li>
                            <li>
                                <a href=''>Blog</a>
                            </li>
                            <li>
                                <a href=''>Shipping Policy</a>
                            </li>
                            <li>
                                <a href=''>Returns & Exchanges</a>
                            </li>
                            <li>
                                <a href=''>Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-3'>
                        <ul
                            style={{
                                textAlign: 'justify',
                                listStyle: 'none',
                                justifyContent: 'flex-star',
                                alignItems: 'flex-start',
                                marginTop: '15px',
                                marginBottom: '25px',
                            }}
                        >
                            {' '}
                            <li>
                                <a href=''>Customer care</a>
                            </li>
                            <li>
                                <a href=''>Reviews</a>
                            </li>
                            <li>
                                <a href=''>Easy Returns Portal</a>
                            </li>
                            <li>
                                <a href=''>FAQ</a>
                            </li>
                            <li>
                                <a href=''>Ambassador Program</a>
                            </li>
                            <li>
                                <a href=''>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-sm-3'>
                        <h4 style={{ color: 'black', marginBottom: 20 }}>
                            Stay in touch
                        </h4>
                        <h6>mianusman2488@gmail.com</h6>
                    </div>
                </div>
            </div>
        </>
    );
}
