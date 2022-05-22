import React from 'react';
import { useNavigate } from 'react-router-dom';

const Recommend = (props) => {
    const { _id, name, img , details ,price } = props.r;
    const navigate = useNavigate();
    const handleItemUpdate = () =>{
        navigate(`/update/${_id}`)
    }
    return (
        <div>
            <img src={img} alt="" />
            <h3>name : {name}</h3>
        </div>
    );
};

export default Recommend;


