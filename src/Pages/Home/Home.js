import React from 'react';
import Banner from './Banner';
import Post from './Post';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Banner></Banner>
            <Post></Post>
        
        </div>
    );
};

export default Home