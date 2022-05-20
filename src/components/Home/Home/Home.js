import React from 'react';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';

const Home = () => {
    const preloader = () => {
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Home;