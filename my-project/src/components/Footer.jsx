import React from 'react';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
 import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
 <>
 <hr/>
 <footer  className="py-12">
    <div  className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
        <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
            <IoLogoLinkedin size={24} />
            <FaGithub size={24}/>
            <FaInstagramSquare size={24} />
            <FaTelegram size={24}/>
        <FaWhatsapp size={24}/>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
             
            
                <p className='text-sm'>
                     2024 Sakshi Singh.
                     </p>
                 <p className='text-sm'>G.L.B.I.T.M(U.P).</p> 
                 <p className='text-sm'>All rights reserved.</p>

                   
                
              
            </div>

        </div>

         
    </div>
 </footer>
 </>
  );
}
 
export default Footer;