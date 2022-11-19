import React from 'react';

export default function Star({ star, review }) {
    const rantingstart = Array.from({ length: 5 }, (v, i) => {
        let number = i + 0.5;
        return (
            <span key={i}>
                {star >= i + 1 ? (
                    <i
                        className='fa-solid fa-star'
                        style={{ color: '#00b5ad', fontSize: '25px' }}
                    ></i>
                ) : star >= number ? (
                    <i
                        className='fa-regular fa-star-half-stroke'
                        style={{
                            color: '#00b5ad',
                            fontSize: '25px',
                        }}
                    ></i>
                ) : (
                    <i
                        className='fa-regular fa-star'
                        style={{ color: '#00b5ad', fontSize: '25px' }}
                    ></i>
                )}
            </span>
        );
    });
    return (
        <div>
            <div className='icon-style'>
                {rantingstart}
                <p>({review}) customer reviews</p>
            </div>
        </div>
    );
}
