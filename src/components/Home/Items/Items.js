import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cars from '../Cars/Cars';
import './Items.css';

const Items = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-5'>
            <div className="car-heading">
                <h1 className='text-center mt-5 mb-5'>Inventory Items </h1>
            </div>
            <div className="itemss ">
                {
                    products.slice(0, 6).map(product => <Cars key={product._id}
                        product={product}
                        
                    ></Cars>)
                }
            </div>
            <div className="manage-items d-flex">
                <Link to='/inventory'>
                    <button className='manage-items-btn '>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Items;