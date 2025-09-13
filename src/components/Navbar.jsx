import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { LiaUser } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <>
    
    
    <nav is='navbar' className='pt-[30px] pb-[15px]'>
      <div className="container">
        <div id='navbar-row' className='flex items-center justify-between'>

          {/* -------------- logo  */}

          <Link to={'/'}><img src={logo} alt="main-logo" /></Link> 

          {/* --------- nav-items */}
          <div>
            <ul className='flex gap-[35px] items-center'>
              <li><Link to={'/'} className='text-[18px] font-bold font-primary text-[#0A2C3D] hover:text-[#FF5A3C] duration-[.3s]' >Home</Link></li>
              <li><Link to={'/'} className='text-[18px] font-bold font-primary text-[#0A2C3D] hover:text-[#FF5A3C] duration-[.3s]' >Properties</Link></li>
              <li><Link to={'/'} className='text-[18px] font-bold font-primary text-[#0A2C3D] hover:text-[#FF5A3C] duration-[.3s]' >Property</Link></li>
              <li><Link to={'/'} className='text-[18px] font-bold font-primary text-[#0A2C3D] hover:text-[#FF5A3C] duration-[.3s]' >Blog</Link></li>
              <li><Link to={'/'} className='text-[18px] font-bold font-primary text-[#0A2C3D] hover:text-[#FF5A3C] duration-[.3s]' >Pages</Link></li>
              <li><Link to={'/'} className='text-[18px] font-bold font-primary text-[#0A2C3D] hover:text-[#FF5A3C] duration-[.3s]' >Contact</Link></li>
            </ul>
          </div>

          {/* -------- icons  */}
          <div className='flex items-center gap-[8px]'> 
            <div className='w-[39px] h-[35px] bg-white hover:text-[#FF5A3C] duration-[.3s] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] flex justify-center items-center'> <Link to={'/'} ><LiaUser className='text-[24px]' /></Link></div>
            <button className='w-[39px] h-[35px] bg-white hover:text-[#FF5A3C] duration-[.3s] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] flex justify-center items-center'><FaRegHeart className='text-[18px]' /></button>
            <button className='w-[39px] h-[35px] bg-white hover:text-[#FF5A3C] duration-[.3s] shadow-[0px_4px_30px_0px_rgba(31,_38,_135,_0.15)] flex justify-center items-center'><IoIosSearch className='text-[24px]' /></button>
          </div>

        </div>
      </div>
    </nav>
    
    
    
    
    
    </>
  )
}

export default Navbar