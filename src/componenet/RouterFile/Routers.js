import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import ProductComponent from '../ProductComponent';
import ProductDetails from '../ProductDetails';
import ProductListining from '../ProductListining';
export default function Routers() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Header />} />
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
                        path='/ProductDetails'
                        exact
                        element={<ProductListining />}
                    />
                </Routes>
            </Router>
        </div>
    );
}
