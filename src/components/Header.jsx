import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <>
    

    <header id='head' className='bg-[#0A2C3D]'>
        <div className="container">
            <div id='head_row' className='flex justify-between'>


                {/* ------------ left-side */}

                <div className='flex'>
                    <div className='flex gap-[9px] items-center border-r border-[#ffffff68] pr-[9px]'>
                        <LuMapPin className='text-[16px] text-white ' />
                        <p className='text-[14px] font-normal font-primary text-white'>254 Lillian Blvd, Holbrook</p>
                    </div>
                    <div className='flex gap-[8px] items-center pl-[11px]'>
                        <TfiEmail className='text-[16px] text-white' />
                        <p className='text-[14px] font-normal font-primary text-white'>info@santizex-site.com</p>
                    </div>
                </div>

                {/* ---------- right-side */}

                <div className='flex gap-[18px] items-center'>
                    <div className='flex gap-[15px]'>

                    <FaFacebookF  className='text-[16px] text-white' />
                    <FaTwitter className='text-[16px] text-white'  />
                    </div>

                    <button className='w-[137px] bg-[#FF5A3C] py-[15px] pb-[12px] text-[14px] font-normal font-main text-[#fff]'>Add Listings</button>

                </div>

            </div>
        </div>
    </header>
    
    
    
    
    </>
  )
}

export default Header