import React from 'react';
import useTitle from '../../../../Hook/UseSetTitle';
import Banner from '../Banner/Banner';
import HomeService from '../HomeService/HomeService';
import TwoPart from '../TwoPart/TwoPart';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
            <TwoPart></TwoPart>

        </div>
    );
};

export default Home;