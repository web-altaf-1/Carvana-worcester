import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Recomendation from '../Recomendation/Recomendation';

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <Recomendation></Recomendation>
            <Items></Items>
        </div>
    );
};

export default Home;