import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../About';
import Cart from '../Cart';
import Contact from '../contact';
import Header from '../Header';
import Home from '../Home';
import Navbar from '../Navbar';
import ProductComponent from '../ProductComponent';
import ProductDetails from '../ProductDetails';
import ProductListining from '../ProductListining';
export default function Routers() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* <Route path='' element={<Navbar />} /> */}
                    <Route path='/' element={<Home />} />
                    <Route path='/product' element={<Header />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route
                        exact
                        path='/ProductComponent'
                        element={<ProductComponent />}
                    />
                    <Route
                        path='/Product/:productId'
                        exact
                        element={<ProductDetails />}
                    />
                    <Route
                        path='/ProductListining'
                        exact
                        element={<ProductListining />}
                    />
                    <Route path='/Cart' exact element={<Cart />} />
                </Routes>
            </Router>
        </div>
    );
}
