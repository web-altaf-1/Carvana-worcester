import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cars.css';

const Cars = (props) => {
    // distracturing 
    const { _id, name, img , details ,price } = props.product;
    const navigate = useNavigate();

    // hadle item update 
    const handleItemUpdate = () =>{
        navigate(`/update/${_id}`)
    }
    return (
        <div className=''>
            <img className='m-auto w-75 img-fluid d-block' src={img} alt="" />
            <h3 className='text-center my-3'> {name}</h3>
            <h5 className='text-center product-price'>starting from ${price}</h5>
            <button className='update-button' onClick={handleItemUpdate}>Update</button>
        </div>
    );
};

export default Cars;
