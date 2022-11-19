import { grey } from '@mui/material/colors';
import React from 'react';
import Navbar from './Navbar';
import Blog1 from '../images/our-story.webp';
import design1 from '../images/thedesign-1.webp';
import design2 from '../images/thedesign-2.webp';
import fabric from '../images/the-fabric-1.webp';
import fabric2 from '../images/the-fabric-2.webp';
import fb from '../images/fb-top.png';
import twitter from '../images/twitter-top.png';
import instagram from '../images/instagram-top.png';
import Linkin from '../images/linkedin-top.png';
import '../style.css';
export default function About() {
    const renderList = () => {
        return (
            <>
                <div className='container-fluid my-4'>
                    <h1
                        style={{
                            color: 'grey',
                            letterSpacing: 6,
                            fontWeight: 'bold',
                            fontSize: 40,

                            fontStyle: 'Rubik Marker Hatch',
                            // border: '2px solid grey',
                        }}
                    >
                        𝕆𝕌ℝ 𝕊𝕋𝕆ℝ𝕐
                    </h1>
                    <div className='row my-5 justify-content-center px-5'>
                        <div className='col-sm-5 my-3'>
                            <p style={{ textAlign: 'justify' }}>
                                Our brand originates from history. The Silk and
                                Salt trades were some of the most historical and
                                revolutionary creations that led to the modern
                                world we live in today. Here at Silk & Salt, we
                                aim to create revolutionary designs that honor
                                the needs of the modern woman with special
                                emphasis on the history of fashion. We believe
                                every woman has a little bit of Silk & Salt in
                                them.
                                <br />
                                <br /> <br />
                                Silk represents the woman within us, she's
                                beautiful, loving, softhearted and timeless.
                                While Salt represents our inner sass,strength,
                                spice of life and wittiness. We encapsulate all
                                aspects of the woman in our brand, in order to
                                bring her an effortlessly timeless & trendy
                                closet. <br /> <br />
                                <br />
                                We stand for classy, premium, affordable,
                                innovative fashion. We are a team of creators,
                                who believe two minds are better than one. Our
                                open floor studio space keeps the work
                                environment highly effective and communication -
                                friendly.
                                <br /> <br />
                                <br /> If you happen to overhear something said
                                inside of our work space, it would probably be:
                                "Customer first, everything else second".
                                <br /> <br />
                                <br /> Join us on our historical mission and
                                always feel free to give us your feedback.
                            </p>
                        </div>
                        <div className='col-sm-4'>
                            <div>
                                <img src={Blog1} alt='' />
                            </div>
                        </div>
                    </div>
                    <h2
                        style={{
                            color: 'grey',
                            letterSpacing: 10,
                            fontWeight: 'bold',
                            wordSpacing: '1rem',
                            fontSize: 60,

                            fontStyle: 'Rubik Marker Hatch',
                        }}
                    >
                        𝕋ℍ𝔼 𝔻𝔼𝕊𝕀𝔾ℕ
                    </h2>
                    <div className='container my-3 '>
                        <div className='row my-3  mb-15 justify-content-center  '>
                            <div className=' row my-3 py-4  col-sm-7'>
                                <div className='col-sm-6 my-3'>
                                    <img src={design1} alt='' width='300' />
                                </div>
                                <div className='col-sm-6 my-3'>
                                    <img src={design2} alt='' width='300' />
                                </div>
                            </div>
                            <div className='col-sm-5 mt-5 my-3'>
                                <p style={{ textAlign: 'justify' }}>
                                    We believe that every woman is strong &
                                    deserves sophisticated, versatile & classy
                                    clothing that would make her feel elevated &
                                    her most confident in every adventure she
                                    embarks on, whether it’s for her jam-packed
                                    workday, or her sparkling night out.
                                    <br />
                                    <br /> Our mission is to provide women with
                                    looks that are effortless in its
                                    transformation from day to night. When our
                                    in-house design team begins dreaming up the
                                    concept for the next collection, <br />{' '}
                                    <br />
                                    <br />
                                    they first establish how their designs will
                                    accentuate and celebrate the natural
                                    feminine figure, all while being unique and
                                    comfortable.
                                    <br /> <br />
                                    <br /> They take into consideration the
                                    modern woman’s need for stitch-perfect
                                    clothing, she can wear repetitively, and
                                    never feel repetitive in. Most of all,{' '}
                                    <br />
                                    we shape our brand to be filled with
                                    refreshing designs that empower you as they
                                    become your timeless, go-to staple closet
                                    pieces.
                                </p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div
                        className='container my-3'
                        style={{ marginTop: '20px ' }}
                    >
                        <div className='row  mb-5 justify-content-center  '>
                            <div className='col-sm-5 mt-5'>
                                <h1
                                    style={{
                                        color: 'grey',
                                        letterSpacing: 13,
                                        fontWeight: 'bold',
                                        wordSpacing: '2rem',
                                        fontSize: 65,
                                        marginBottom: 5,

                                        fontStyle: 'Rubik Marker Hatch',
                                    }}
                                >
                                    𝕋ℍ𝔼 𝔽𝔸𝔹ℝ𝕀ℂ
                                </h1>
                                <br />
                                <br />
                                <p style={{ textAlign: 'justify' }}>
                                    Our fabrics are hand chosen, from their
                                    durability, to softness, sustainability, to
                                    print fashion. <br />
                                    We believe that when a garment is nice,
                                    every woman will want it twice, or even
                                    thrice. Which is why our designs are created
                                    in a vast palette of prints and colors.
                                    <br />
                                    <br /> After perfecting the design of the
                                    garment, our in-house design team spends
                                    their time experimenting with a multitude of
                                    fabric types to find just
                                    <br /> the right ones to really elevate the
                                    garment from just another piece in your
                                    closet, to your “I Just can’t live without
                                    this piece.”
                                    <br />
                                    <br /> We aim to use fabrics that are rich
                                    in their feel, eye-catching in their nature,
                                    and above all, make you feel comfortable as
                                    you embark on your day.
                                </p>
                            </div>
                            <div className=' row  col-sm-7 my-3'>
                                <div className='col-sm-6 my-5'>
                                    <img
                                        src={fabric}
                                        alt=''
                                        width='310'
                                        height='590'
                                    />
                                </div>
                                <div className='col-sm-6 my-5'>
                                    <img
                                        src={fabric2}
                                        alt=''
                                        width='310'
                                        height='590'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    {/* <br></br>
                    <br></br>
                    <br></br>
                    <br></br> */}
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
                </div>
            </>
        );
    };
    return (
        <div className=''>
            <Navbar />
            {renderList()}
        </div>
    );
}
