import React from 'react';


import pic from "../../public/saloni.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { RiReactjsFill } from "react-icons/ri";

import { ReactTyped,Typed } from "react-typed";




function Home ()
 {
  return (
    <>
     <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      > 
        <div className=" flex flex-col md:flex-row space-x-10 ">



           <div  classname="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 "> 
      
      <img 
      src={pic}  
      className=" rounded-full  md:w-[450px] md:h-[450px]" alt=""/>
      
      
      </div>

      
          <div className="md:w-1/2  mt-12 md:mt-24 space-y-2 order-2 md:order-1  ">
      
  <span className='text-xl'>Welcome In My Feed</span>
      <div className="flex space-x-1 text-2xl md:text-4xl">
       <h1>
        Hello, I'm a 
        </h1>
      {/*  <span className=" text-red-700 font- bold">Developer
          </span> */}

      <ReactTyped
             className=" text-red-700 font- bold"
          strings= {["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backspeed={40}
          loop={true}
        />
      
       </div>
       <br/>
       <p className="text-sm md:text-md text-justify">
           
            </p>
          <br/>


          {/*Social Media Icons*/}

         <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
          <div className=" space-y-2">
            <h1 className='font-bold text-cemter'>
              Available on
            </h1>
            

            <ul className="flex space-x-5">

              <li>
                <a href="https://www.linkedin.com/in/sakshi-singh-b26468274" target='_blank' >
            <FaLinkedin  className="text-2xl cursor-pointer"/>
            </a>
            </li>    

            <li>
            <a href="https://github.com/sakshisingh2401" target="_blank">
            <FaGithub className="text-2xl cursor-pointer"/>
            </a>
            </li>
            <li>
            {" "}
            < FaInstagramSquare className="text-2xl cursor-pointer"/>
            </li>
            <li>
            {" "}
            <FaTelegram className="text-2xl cursor-pointer"/>
            </li>
            <li>
            {" "}
            <FaWhatsapp className="text-2xl cursor-pointer"/>
            </li>
            
            </ul>
          </div>

        {/*Current technology Working on*/}
          <div className='space-y-2'>
          <h1 className='font-bold text-center'>
            Currently  working on
            </h1>
            

            <ul className="flex space-x-5">

            <li>
            {" "}
            <FaHtml5  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </li>
            <li>
            {" "}
             <DiCss3 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </li>
            <li>
            {" "}
            <DiJavascript  className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </li>
            <li>
            {" "}
            <RiReactjsFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </li>
            </ul>
          </div>
          </div>
      </div>
      </div>

     
      </div>


    </>
  )
}

export default Home;
