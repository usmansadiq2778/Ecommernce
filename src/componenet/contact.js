import React from 'react';
import Navbar from './Navbar';
import '../style.css';
import fb from '../images/fb-top.png';
import twitter from '../images/twitter-top.png';
import instagram from '../images/instagram-top.png';
import Linkin from '../images/linkedin-top.png';

export default function Contact() {
    const renderList = () => {
        return (
            <>
                <div className='container-fluid'>
                    <h1 style={{ marginTop: 35, marginBottom: 35 }}>
                        Contact Us
                    </h1>
                    {/* <h3>Contact htmlForm</h3> */}

                    <div className='container'>
                        <form action='/action_page.php'>
                            <label htmlFor='fname'>First Name</label>
                            <input
                                type='text'
                                id='fname'
                                name='firstname'
                                placeholder='Your name..'
                            />

                            <label htmlFor='lname'>Last Name</label>
                            <input
                                type='text'
                                id='lname'
                                name='lastname'
                                placeholder='Your last name..'
                            />

                            <label htmlFor='country'>Country</label>
                            <select id='country' name='country'>
                                <option value='australia'>Australia</option>
                                <option value='canada'>Canada</option>
                                <option value='usa'>USA</option>
                            </select>

                            <label htmlFor='subject'>Subject</label>
                            <textarea
                                id='subject'
                                name='subject'
                                placeholder='Write something..'
                                style={{ height: '200px' }}
                            ></textarea>

                            <input type='submit' value='Submit' />
                        </form>
                    </div>
                    <div
                        className='container-fluid mt-4 mb-4 my-7  mainfooter'
                        style={{
                            backgroundColor: 'whitesmoke',
                            padding: 45,
                            marginTop: '40px',
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
                </div>
            </>
        );
    };
    return (
        <div>
            <Navbar />
            {renderList()}
        </div>
    );
}
