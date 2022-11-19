import React from 'react';

export default function CartamountToggle({
    setdecrement,
    setincrement,
    amount,
}) {
    return (
        <div className='cart-button '>
            <div className=' amount-Toggle d-flex justify-content-center align-items-center p-3'>
                <button onClick={() => setdecrement()}>
                    <i
                        class='fa-solid fa-square-minus'
                        style={{ fontSize: 22 }}
                    ></i>
                </button>

                <div
                    className='amount-style mx-3'
                    style={{ color: 'black', fontWeight: 'bold' }}
                >
                    <h3> {amount}</h3>
                </div>
                <button onClick={() => setincrement()}>
                    <i
                        class='fa-solid fa-square-plus'
                        style={{ fontSize: 22 }}
                    ></i>
                </button>
            </div>
        </div>
    );
}
