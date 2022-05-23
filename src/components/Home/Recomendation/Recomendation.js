import React from 'react';
import UseRecommendation from '../../../hooks/UseRecommendation';
import Recommend from '../../Recommend/Recommend';
import './Recommendation.css';

const Recomendation = () => {
    // custom hooks used for load data from database 
    const [recomendation,setRecommendation] = UseRecommendation();
    return (
        <div>
            <h1 className=' text-center my-5'>Recommendation </h1>
            <div className='recommendation'>
                {
                    recomendation.map(r => <Recommend 
                        key={r._id}
                        r={r}
                    ></Recommend>)
                }
            </div>

        </div>
    );
};

export default Recomendation;