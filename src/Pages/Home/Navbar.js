import React from 'react';
import { Link } from 'react-router-dom';
import house from '../images/house.jpg'


const Navbar = () => {
    return (
        <div className='lg:py-16'>
    <img className='w-44 ml-8 h-12 hidden lg:flex' src={house} alt=""/>
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <a class="hidden lg:flex btn btn-ghost normal-case text-xl">THE<span className='font-bold ml-2'> WELSE HOUSE</span></a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'><a className='hover:text-[#822C1E] hover:bg-white'>ABOUT</a></Link></li>
      <li><a className='hover:text-[#822C1E] hover:bg-white'>COTTAGES</a></li>
      <li><Link to='/things'><a className='hover:text-[#822C1E] hover:bg-white'>THINGS TO DO</a></Link></li>
      <li><a className='hover:text-[#822C1E] hover:bg-white'>JOURNAL</a></li>
      <li><Link to='/contact'><a className='hover:text-[#822C1E] hover:bg-white'>CONTACT</a></Link></li>
    </ul>
  </div>
  
</div>

<div className='lg:hidden px-6'>
<div className='navbar-center relative grid grid-cols-1 place-content-center'>

<div className='pb-4'>
<label for="my-modal-3" class=" modal-button ">MENU</label>
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-72 h-72 shadow-none  bg-[#ACAFB3] overflow-hidden mx-auto">
    <label for="my-modal-3" class=" btn-sm btn-circle absolute left-24 bottom-0 text-xl ">MENU</label>
    <ul tabindex="0" class="dropdown-content mt-8 p-2 w-52">
            <li><a href="#">SERVICES</a></li>
            <li className='mt-2'><Link to=''><a>ABOUT</a></Link></li>
            <li className='mt-2'><Link to=''><a>COTTAGES</a></Link></li>
            <li className='mt-2'><Link to='/things'><a>THINGS TO DO</a></Link></li>
            <li className='mt-2'><Link to=''><a>JOURNAL</a></Link></li>
            <li className='mt-2'><Link to='/contact'><a>CONTACT</a></Link></li>
      </ul>
  </div>
</div>
</div>
<div className=' pt-4'></div>
<div>
  <img className='mt-4 lg:hidden mx-auto' src={house} width={120} height={80} alt=""/>
  <p><small>THE WELSE HOUSE</small></p>
  </div>

</div>

<div className='navbar-start'></div>
  <div className='navbar-end'></div>
</div>
        </div>
    );
};

export default Navbar;