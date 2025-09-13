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
            <div id='head_row'>


                {/* ------------ left-side */}

                <div className='flex'>
                    <div className='flex gap-[9px] items-center border-r border-[#ffffff68] pr-[9px]'>
                        <LuMapPin className='text-[16px] ' />
                        <p className='text-[14px] font-normal font-primary text-white'>254 Lillian Blvd, Holbrook</p>
                    </div>
                    <div className='flex gap-[8px] items-center pl-[11px]'>
                        <TfiEmail className='text-[16px]' />
                        <p className='text-[14px] font-normal font-primary text-white'>info@santizex-site.com</p>
                    </div>
                </div>

                {/* ---------- right-side */}

                <div>
                    <FaFacebookF />
                    <FaTwitter />

                    <button className='w-[137px] bg-[#FF5A3C]'>Add Listings</button>

                </div>

            </div>
        </div>
    </header>
    
    
    
    
    </>
  )
}

export default Header