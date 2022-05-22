import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateCar.css';

const UpdateCar = () => {
    
    const {id} = useParams();
    const [item,setItem] = useState([]);
    useEffect(()=>{
        const url = `http://localhost:5000/items/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[item.quantity,id]);

    



    return (
        <div>
            <div className='w-75 mx-auto text-center'>
                <img className='img-fluid mt-5' src={item.img} alt="" />
                <h2 className='my-2'>{item.name}</h2>
                <h4 className='text-gray'>Starting from ${item.price}</h4>
                <h4 className='text-gray'>Available Cars {item.quantity}</h4>
                <button className='update-button '>Delevered</button>
                <h3 className='mt-4'>Are you want to restock ??</h3>
                <div className='my-3'>
                    <input className='' type="number" placeholder='type the quantity' name='updateQuantity'  />
                    <button className='ms-5 restock-button '>Restock</button>
                </div>

            </div>
            
        </div>
    );
};

export default UpdateCar;