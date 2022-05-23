import React from 'react';
import Desclaimer from '../../Desclaimer/Desclaimer';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Recomendation from '../Recomendation/Recomendation';

const Home = () => {
    

    return (
        <div>
            <Banner></Banner>
            <Recomendation></Recomendation>
            <Items></Items>
            <Desclaimer></Desclaimer>
        </div>
    );
};

export default Home;