import React from 'react'
import { LuMapPin } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const Header = () => {
  return (
    <>
    

    <header id='head' className='bg-[#0A2C3D]'>
        <div className="container">
            <div id='head_row'>


                {/* ------------ left-side */}

                <div>
                    <div>
                        <LuMapPin />
                        <p>254 Lillian Blvd, Holbrook</p>
                    </div>

                    <div>
                        <TfiEmail />
                        <p>info@santizex-site.com</p>
                    </div>

                </div>

            </div>
        </div>
    </header>
    
    
    
    
    </>
  )
}

export default Header