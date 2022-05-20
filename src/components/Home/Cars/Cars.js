import React from 'react';
import './Cars.css';

const Cars = (props) => {
    const { _id, name, img } = props.product;
    return (
        <div className=''>
            <img className='m-auto w-100 img-fluid' src={img} alt="" />
            <h3>Name : {name}</h3>
        </div>
    );
};

export default Cars;
