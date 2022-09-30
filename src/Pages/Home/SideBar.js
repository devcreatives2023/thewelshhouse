import React from 'react';
import Slider from 'react-slick';
import house1 from '../images/house1.jpg'
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'

const SideBar = () => {

    const settings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 2000,
      dots: false,
      arrows:true
    }

  
  
  return (
    <div className='lg:hidden justify-between items-center text-left px-6 pt-12'>
     
     <div className='w-full'>
                <p className=' mb-2 text-xl text-[#8E361E]'>Blog viral williamsburg twee four</p>
                <p className='mb-4'>I'm baby sus mukbang affogato activated charcoal tonx woke PBR&B, artisan raw denim viral subway tile heirloom tilde organic.</p>

                <p className='mb-4'>Blog viral williamsburg twee four dollar toast kogi. Tbh stumptown sartorial PBR&B, master cleanse skateboard VHS man braid vape. Chillwave craft beer bodega boys YOLO four dollar toast +1 big mood lyft marfa. </p>

                <p>Selvage bushwick cold-pressed fit woke disrupt everyday carry bicycle rights 8-bit tacos put a bird on it ennui mustache. Fam cardigan edison bulb woke irony sriracha mumblecore cray pour-over twee.</p>
            </div>

     <div className=' my-12'>
     <Slider {...settings}>
          <div>
            <img src={house1} alt=''/>
            <small>Chillwave craft beer bodega boys YOLO four dollar toast +1 big mood lyft marfa.</small>
          </div>
          <div>
            <img src={house2} alt=''/>
            <small>Fam cardigan edison bulb woke irony sriracha mumblecore cray pour-over twee.</small>
          </div>
          <div>
            <img src={house3} alt=''/>
            <small>Selvage bushwick cold-pressed fit woke disrupt everyday carry bicycle rights 8-bit tacos put a bird on it ennui mustache.</small>
          </div>
          <div>
            <img src={house4} alt=''/>
            <small>Tbh stumptown sartorial PBR&B, master cleanse skateboard VHS man braid vape. </small>
          </div>
          <div>
            <img src={house1} alt=''/>
            <small>Fam cardigan edison bulb woke irony sriracha mumblecore cray pour-over twee.</small>
          </div>
        </Slider>
     </div>
    </div>
  );
};

export default SideBar;