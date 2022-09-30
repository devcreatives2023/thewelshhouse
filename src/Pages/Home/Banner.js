import React from 'react';
import banner1 from '../images/banner1.jpg'
import banner2 from '../images/banner2.jpg'
const Banner = () => {
    return (
        <div>
            <div className='hidden lg:grid grid-cols-2 gap-4 items-center text-left mt-4  pb-8 mb-8 pt-4'>
            <div className=''>
                <img src={banner1} alt="" />
                <h4 className='font-bold my-4'>BRYNCYN</h4>
                <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.</p>
            </div>
            <div>
                <img src={banner2} alt="" />
                <h4 className='font-bold my-4'>BRYN EGLUR</h4>
                <p>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!</p>
            </div>
        </div>

        <div className='lg:hidden grid grid-cols-1 px-6 items-center text-left my-4 pb-12 
         pt-4'>
            <div className=''>
                <img src={banner1} alt="" />
                <h4 className='font-bold my-4'>BRYNCYN</h4>
                <p className='pb-4'>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.</p>
            </div>
            <div>
                <img src={banner2} alt="" />
                <h4 className='font-bold my-4'>BRYN EGLUR</h4>
                <p>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!</p>
            </div>
        </div>
        </div>
    );
};

export default Banner