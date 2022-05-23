import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recommend = (props) => {
    const { _id, name, img , details ,price } = props.r;
    const navigate = useNavigate();
    const handleItemUpdate = () =>{
        navigate(`/update/${_id}`)
    }
    return (
        <div className='shadow-lg mx-3'>
            <img className='img-fluid d-block m-auto' src={img} alt="" />
            <h3 className='text-center my-2'>Name : {name}</h3>
            <button className='btn btn-primary mx-auto d-flex my-3 w-auto'>Explore Offers</button>
        </div>
    );
};

export default Recommend;


