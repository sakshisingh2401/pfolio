import React from 'react'
import logo from '../../public/logo.jpg'
import logo2 from "../../public/logo2.jpeg"
import { TbUnlink } from "react-icons/tb";

function Project() {

  const cardItem =[
   
    {
      id:1,
      logo:logo,
      name:"Audio Amplifier",
    },


    {
      id:2,
      logo:logo2,
      name:"obstacle detector",
    },

 
  
  ]
  return (
    <div
    name="Project"
     className=" max-w-screen-2xl container mx-auto px-4 md: px-20 mt-10">
       
       <div>
        <h1 className="text-3xl font-bold mb-5">Projects.</h1>
        <span className="underline semi-bold">Featured  projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {
            cardItem.map(({id,logo,name}) =>(
            <div className="md:w-[350px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 "
            key={id}
            >
              <img src={logo}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              alt=""
              />
              <div>
                <div className="px-2 font-bold texy-xl mb-2">
                  {name}
                </div>
                <p className='px-2 text-gray-700'>
                This project allowed me to apply theoretical knowledge in circuit
                design,troubleshooting to create a functional & high-quality 
               project.
                </p>
                </div>
                <div className='px-6 py-4 space-x-3 justify-around'>
                  <li  className='bg-blue-500 hover:bg-green-700 '>link
                    
                      <a href="https://drive.google.com/file/d/19pc0WcSP8EwWsGrlrBu8VL7tHEcsPKVn/view"  target="_blank ">
                      
                      <TbUnlink  className="text-4xl cursor-pointer"/>
                      </a>
                    
                  </li>
                  </div>
                  </div>
            ))}
      
         
            
       </div>
        </div>
       </div>

    
  );
}

export default Project;