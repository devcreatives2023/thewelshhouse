import React from "react";
import facebook from '../images/facebook.png'
import post1 from '../images/post1.png'
import post2 from '../images/post2.jpg'
import post3 from '../images/post3.jpg'
import post4 from '../images/post4.jpg'

const Post = () => {
  return (

    <div>
          <div className="">
      <p className="font-bold text-[#8E361E] pb-4 text-left hidden lg:flex">FURTHER READING</p>
      <div className="hidden lg:grid grid-cols-4 items-center gap-8">
        
        <div className="text-left">
        <div>
          <p className="pb-4   pt-4">VANISHING WALES</p>
          <img className="pb-4" src={post1} alt=""/>
          <small>MAY 4, 2014</small>
          <h4 className="pt-4 pb-16 font-bold">BEAUTY IN DECAY</h4>
        </div>

        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
        </div>

       <div className="text-left">
       <div>
          <p className="pb-4   pt-4">THINGS TO DO</p>
          <img className="pb-4"
            src={post2} alt=""/>
          <small>OCT 26, 2015</small>
          <h4 className="pt-4 pb-16 font-bold">COUNTRY LIVING MODERN RUSTIC</h4>
        </div>
        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
       </div>

        <div className="text-left">
        <div>
          <p className="pb-4   pt-4">EATING</p>
          <img className="pb-4"
            src={post3}
            alt=""
          />
          <small>APR 27, 2015</small>
          <h4 className="pt-4 pb-16 font-bold">WILD GARLIC</h4>
        </div>
        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
        </div>

       <div className="text-left">
       <div>
          <p className="pb-4   pt-4">GROWING</p>
          <img className="pb-4"
            src={post4} alt=""/>
          <small>APR 28, 2014</small>
          <h4 className="pt-4 pb-16 font-bold">SPRING IS IN THE AIR</h4>
        </div>

        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
       </div>
        
      </div>
    </div>

    <div className="pb-24">
      <h4 className=" text-[#8E361E] pb-4 text-left px-6 lg:hidden font-bold">FURTHER READING</h4>
      <div className="lg:hidden  items-center px-6">
        
        <div className="text-left pb-12">
        <div>
          <p className="pb-4   pt-4">VANISHING WALES</p>
          <img className="pb-4 w-full" src={post1} alt=""/>
          <small>MAY 4, 2014</small>
          <h4 className="pt-4 pb-16">BEAUTY IN DECAY</h4>
        </div>

        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
        </div>

       <div className="text-left pb-12">
       <div>
          <p className="pb-4   pt-4">THINGS TO DO</p>
          <img className="pb-4 w-full"
            src={post2} alt=""/>
          <small>OCT 26, 2015</small>
          <h4 className="pt-4 pb-16">COUNTRY LIVING MODERN RUSTIC</h4>
        </div>
        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
       </div>

        <div className="text-left pb-12">
        <div>
          <p className="pb-4   pt-4">EATING</p>
          <img className="pb-4 w-full"
            src={post3}
            alt=""
          />
          <small>APR 27, 2015</small>
          <h4 className="pt-4 pb-16">WILD GARLIC</h4>
        </div>
        <div>
                <div className='  w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
        </div>

       <div className="text-left pb-12">
       <div>
          <p className="pb-4 pt-4">GROWING</p>
          <img className="pb-4 w-full"
            src={post4} alt=""/>
          <small>APR 28, 2014</small>
          <h4 className="pt-4 pb-16">SPRING IS IN THE AIR</h4>
        </div>

        <div>
                <div className=' w-4 pt-8'></div>
                <div>
                    <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers.</p>
                </div>
                
            </div>
       </div>
        
      </div>
    </div>
    </div>
  );
};

export default Post;
