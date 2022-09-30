import React from 'react';
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import youtube from '../images/youtube.png'
import twitter from '../images/twitter.png'

const Footer = () => {
    return (
       
        <div>
             <div className='text-left pb-12'>
            <div className='  hidden lg:flex'></div>
            <div className='hidden lg:flex justify-between items-center'>
                <div>
                    <h4 className='pt-12'>Sign up the Newsletter</h4>
                    <p><small>Copyright 2022. All rights reserved. All images and words copyright free</small></p>
                    <small>Site By Mohsin Kabir</small>
                    
                </div>
            

            <div className='flex gap-2'>
                <img className='w-6 h-6' src={facebook} alt="" />
                <img className='w-6 h-6' src={twitter} alt="" />
                <img className='w-6 h-6' src={instagram} alt="" />
                <img className='w-6 h-6' src={youtube} alt="" />
            </div>
            </div>
        </div>

        <div className='text-left pb-12'>
            <div className='  lg:hidden px-6'></div>
            <div className='lg:hidden flex justify-between items-center px-6'>
                <div className='w-full'>
                    <h4 className='pt-12'>Sign up the Newsletter</h4>
                    <p><small>Copyright 2022. All rights reserved. All images and words copyright free</small></p>
                    <small>Site By Mohsin Kabir</small>
                    
                </div>
            

            <div className='flex gap-2 items-center justify-between w-full'>
                <img className='w-6 h-6' src={facebook} alt="" />
                <img className='w-6 h-6' src={twitter} alt="" />
                <img className='w-6 h-6' src={instagram} alt="" />
                <img className='w-6 h-6' src={youtube} alt="" />
            </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;