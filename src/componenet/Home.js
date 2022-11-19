import React from 'react';
import Navbar from './Navbar';
import womanimg from '../images/women-img.png';
import Menimg from '../images/men-img.png';
import purse from '../images/purse.png';
import Glass from '../images/glass.png';
import slider from '../images/slider-img.jpg';
import clint from '../images/client.jpg';
import menfeshon from '../images/hangers-1850082__340.jpg';
import feshon from '../images/00_story.webp';
import women from '../images/00-social.webp';
import fb from '../images/fb-top.png';
import twitter from '../images/twitter-top.png';
import instagram from '../images/instagram-top.png';
import Linkin from '../images/linkedin-top.png';
// import slider1 from '../images/slider-img(1).jpg';

import '../style.css';
import '../responsive.css';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const MainHome = () => {
        return (
            <>
                <div>
                    <section className='women_section layout_padding'>
                        <div className='container'>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className='img-box'>
                                            <img src={womanimg} alt='' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='detail-box'>
                                            <div className='heading_container'>
                                                <h2>
                                                    Fashion <br />
                                                    for women
                                                </h2>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing mod
                                                tempor incididunt
                                            </p>
                                            <div className='btn-box'>
                                                <Link to='/product'>
                                                    <a className='btn1'>
                                                        Buy Now
                                                    </a>
                                                </Link>

                                                <a className='btn2'>See More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='men_section layout_padding-bottom'>
                        <div className='container'>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <div className='detail-box'>
                                            <div className='heading_container'>
                                                <h2>
                                                    Fashion <br />
                                                    for men
                                                </h2>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing mod
                                                tempor incididunt
                                            </p>
                                            <div className='btn-box'>
                                                <Link to='/product'>
                                                    <a className='btn1'>
                                                        Buy Now
                                                    </a>
                                                </Link>
                                                {/* <a href='#' className='btn1'>
                                                    Buy Now
                                                </a> */}
                                                <a href='#' className='btn2'>
                                                    See More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='img-box'>
                                            <img src={Menimg} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='modern_section layout_padding-bottom'>
                        <div className='container'>
                            <div className='box layout_padding'>
                                <div className='row'>
                                    <div className='col-md-7'>
                                        <div className='detail-box'>
                                            <div className='heading_container'>
                                                <h2>
                                                    Modern <br />
                                                    bag and glasses
                                                </h2>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt
                                            </p>
                                            <div className='btn-box'>
                                                <a href='#' className='btn1'>
                                                    Buy Now
                                                </a>
                                                <a href='#' className='btn2'>
                                                    See More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-5'>
                                        <div className='img_container'>
                                            <div className='img-box'>
                                                <img src={Glass} alt='' />
                                            </div>
                                            <div className='img-box'>
                                                <img src={purse} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='shop_section layout_padding-bottom'>
                        <div className='container'>
                            <div className='box'>
                                <div className='img-box'>
                                    <img src={slider} alt='' />
                                    <div className='detail-box'>
                                        <div className='heading_container'>
                                            <h2>About our shop</h2>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt
                                        </p>
                                        <a href='#' className=''>
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='client_section'>
                        <div className='container'>
                            <div
                                id='carouselExampleIndicators'
                                className='carousel slide'
                                data-bs-ride='true'
                            >
                                <div className='carousel-indicators'>
                                    <button
                                        type='button'
                                        data-bs-target='#carouselExampleIndicators'
                                        data-bs-slide-to='0'
                                        className='active'
                                        aria-current='true'
                                        aria-label='Slide 1'
                                    ></button>
                                    <button
                                        type='button'
                                        data-bs-target='#carouselExampleIndicators'
                                        data-bs-slide-to='1'
                                        aria-label='Slide 2'
                                    ></button>
                                    <button
                                        type='button'
                                        data-bs-target='#carouselExampleIndicators'
                                        data-bs-slide-to='2'
                                        aria-label='Slide 3'
                                    ></button>
                                </div>
                                <div className='carousel-inner'>
                                    <div
                                        className='carousel-item active'
                                        style={{ height: '400px' }}
                                    >
                                        <img
                                            src={feshon}
                                            className='d-block w-100'
                                            alt='...'
                                        />
                                        <div className='carousel-caption d-none d-md-block'>
                                            <h4 style={{ color: '#00b5ad' }}>
                                                Men's Feshon
                                            </h4>
                                            <p>
                                                Some representative placeholder
                                                content for the first slide.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className='carousel-item'
                                        style={{ height: '400px' }}
                                    >
                                        <img
                                            src={women}
                                            className='d-block w-100 '
                                            alt='...'
                                        />
                                        <div className='carousel-caption d-none d-md-block'>
                                            <h4 style={{ color: '#00b5ad' }}>
                                                Women's Feshion
                                            </h4>
                                            <p>
                                                Some representative placeholder
                                                content for the first slide.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className='carousel-item'
                                        style={{ height: '400px' }}
                                    >
                                        <img
                                            src={menfeshon}
                                            className='d-block w-100 '
                                            alt='...'
                                        />
                                        <div className='carousel-caption d-none d-md-block'>
                                            <h4 style={{ color: '#00b5ad' }}>
                                                First slide label
                                            </h4>
                                            <p>
                                                Some representative placeholder
                                                content for the first slide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className='carousel-control-prev'
                                    type='button'
                                    data-bs-target='#carouselExampleIndicators'
                                    data-bs-slide='prev'
                                >
                                    <span
                                        className='carousel-control-prev-icon'
                                        aria-hidden='true'
                                    ></span>
                                    <span className='visually-hidden'>
                                        Previous
                                    </span>
                                </button>
                                <button
                                    className='carousel-control-next'
                                    type='button'
                                    data-bs-target='#carouselExampleIndicators'
                                    data-bs-slide='next'
                                >
                                    <span
                                        className='carousel-control-next-icon'
                                        aria-hidden='true'
                                    ></span>
                                    <span className='visually-hidden'>
                                        Next
                                    </span>
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className='subscribe_section layout_padding'>
                        <div className='container'>
                            <div className='box'>
                                <div className='row'>
                                    <div className='col-md-8 mx-auto'>
                                        <div className='subscribe_form '>
                                            <div className='heading_container'>
                                                <h2>
                                                    subscribe our newsletter
                                                </h2>
                                            </div>
                                            <p>
                                                HOPE THIS FINDS YOU WELL Sign up
                                                for exclusive deals and receive
                                                special offers and early access
                                                to new product
                                            </p>
                                            <form>
                                                <input
                                                    type='email'
                                                    placeholder='Enter your email'
                                                />
                                                <button>subscribe</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className='contact_section layout_padding-bottom'>
                        <div className='container'>
                            <div className='box layout_padding2'>
                                <div className='row'>
                                    <div className='col-lg-6 col-md-8 mx-auto'>
                                        <div className='contact-form'>
                                            <div className='heading_container'>
                                                <h2>Request a call back</h2>
                                            </div>
                                            <form>
                                                <div>
                                                    <input
                                                        type='text'
                                                        placeholder='Full Name '
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type='text'
                                                        placeholder='Phone Number'
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type='email'
                                                        placeholder='Email Address'
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        type='text'
                                                        placeholder='Message'
                                                        className='input_message'
                                                    />
                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <button
                                                        type='button'
                                                        className='btn_on-hover'
                                                    >
                                                        Send
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div
                        className='container-fluid mt-4 mb-4 my-7  mainfooter'
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
                                    In each of our designs, we envision you, our
                                    client. We wish to create clothes that best
                                    suit your lifestyle and body. Our motto is
                                    that every woman deserves comfortable luxury
                                    clothing.
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
                                <h4
                                    style={{ color: 'black', marginBottom: 20 }}
                                >
                                    Stay in touch
                                </h4>
                                <h6>mianusman2488@gmail.com</h6>
                            </div>
                        </div>
                    </div>

                    <section className='container-fluid footer_section'>
                        <p>
                            Design By
                            <h6>Muhammad usman sadiq</h6>
                        </p>
                    </section>
                </div>
            </>
        );
    };
    return (
        <div>
            <Navbar />
            {MainHome()}
        </div>
    );
}
