import React, { useEffect, useState } from 'react';

const UseRecommendation = () => {
    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/recommendation')
            .then(res => res.json())
            .then(data => setRecommendation(data))
    }, [])
    return [recommendation,setRecommendation];
};

export default UseRecommendation;


