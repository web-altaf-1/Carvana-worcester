import React, { useEffect, useState } from 'react';

const UseCars = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products,setProducts]
};

export default UseCars;