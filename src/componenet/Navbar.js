import React, { useEffect } from 'react';
import { useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { Link } from 'react-router-dom';
import { deletecart } from '../redux-store/Action/ProductAction';
import { useDispatch } from 'react-redux';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../images/6622ab37c6db6ac166dfec760a2f2939.gif';

export default function Navbar() {
    let product = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const getdata = useSelector((state) => state.Cartreducer.carts);
    // const { image, title, category, price, description, rating } = product;

    const [price, setprice] = useState(0);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const Dlt = (e) => {
        dispatch(deletecart(e));
        // console.log('chl rha hu kia tenstion ha', e);
    };
    const total = (e) => {
        let price = 0;
        getdata.map((v, i) => {
            price = v.price + price;
        });
        setprice(price);
        // console.log('chl rha hu kia tenstion ha', e);
    };
    useEffect(() => {
        total();
    }, [total]);
    const handleClose = () => {
        setAnchorEl(null);
    };

    console.log('getdata =>', getdata);
    return (
        <div>
            <nav
                className='navbar   navbar-expand-lg navbar-dark navbar-fixed-top   px-3'
                style={{
                    backgroundColor: 'blue',
                    padding: '15px 5px',
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img
                            src='https://brinso.com/wp-content/uploads/2021/04/1608994305Rongry.png'
                            width='100px'
                            height='50px'
                            alt=''
                        />
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarText'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='/'
                                >
                                    Home
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link active'
                                    aria-current='page'
                                    href='/product'
                                >
                                    Product
                                </a>
                            </li>
                            <li className='nav-item active'>
                                <a className='nav-link' href='/about'>
                                    About
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='/contact'>
                                    {/* Contact */}
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <span className='navbar-text'>
                            {/* <a href='/Cart'> */}
                            <Badge
                                badgeContent={getdata.length}
                                color='primary'
                                // id='demo-positioned-button'
                                id='basic-button'
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup='true'
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <i
                                    className='fa-sharp fa-solid fa-cart-shopping text-light'
                                    style={{
                                        fontSize: 25,
                                        cursor: 'pointer',
                                    }}
                                ></i>
                            </Badge>
                            {/* </a> */}
                        </span>
                    </div>
                    <Menu
                        id='basic-menu'
                        // aria-labelledby='demo-positioned-button'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        // anchorOrigin={{
                        //     vertical: 'top',
                        //     horizontal: 'left',
                        // }}
                        style={{
                            marginTop: '5px',
                        }}
                    >
                        {getdata.length ? (
                            <div
                                className='card_details'
                                style={{ width: '24rem', padding: 10 }}
                            >
                                <table className='table'>
                                    <thead>
                                        <tr
                                        // style={{
                                        //     justifyContent: 'space-between',
                                        //     alignItems: 'center',
                                        // }}
                                        >
                                            <th>Product</th>
                                            <th>Detail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getdata.map((e, i) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <Link
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                id='RouterNavLink'
                                                                to={`/product/${e.id}`}
                                                            >
                                                                <img
                                                                    // onClick={}
                                                                    src={
                                                                        e.image
                                                                    }
                                                                    alt=''
                                                                    style={{
                                                                        width: '6rem',
                                                                        height: '5rem',
                                                                    }}
                                                                />
                                                            </Link>
                                                        </td>

                                                        <td>
                                                            <strong>
                                                                <p>{e.title}</p>
                                                            </strong>
                                                            <p>₹{e.price}</p>

                                                            <p>
                                                                <strong>
                                                                    Q
                                                                </strong>

                                                                {e.id}
                                                            </p>
                                                            {/* <p
                                                                style={{
                                                                    fontsize: 22,
                                                                    color: '#00b5ad',
                                                                    cursor: 'pointer',
                                                                }}
                                                            >
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p> */}
                                                        </td>
                                                        <td
                                                            onClick={() =>
                                                                Dlt(e.id)
                                                            }
                                                            className='mt-5'
                                                            style={{
                                                                fontsize: 22,
                                                                color: '#00b5ad',
                                                                cursor: 'pointer',
                                                            }}
                                                        >
                                                            <i className='fas fa-trash  '></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })}
                                        <strong>
                                            Total : ₹{Math.floor(price)}
                                        </strong>
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div
                                className='card_details d-flex align-items-center  justify-content-center'
                                style={{
                                    width: '24rem',
                                    padding: 10,
                                    position: 'relative',
                                }}
                            >
                                <i
                                    className='fas fa-close smallclose'
                                    onClick={handleClose}
                                    style={{
                                        position: 'absolute',
                                        top: 2,
                                        right: 20,
                                        fontSize: 25,
                                        cursor: 'pointer',
                                    }}
                                ></i>
                                <p style={{ fontSize: 22 }}>
                                    Your cart is Empty
                                </p>
                                <img
                                    src={Logo}
                                    alt=''
                                    className='emptycart_img'
                                    style={{ width: '5rem', padding: 5 }}
                                />
                            </div>
                        )}
                    </Menu>
                </div>
            </nav>
        </div>
    );
}
