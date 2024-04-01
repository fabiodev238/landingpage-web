import React from 'react';
//Icons
import { 
    RiCheckboxBlankCircleFill,  
    RiInstagramLine,
    RiFacebookLine,
    RiTwitterLine,
    RiGithubLine, } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-footer p-8 xl:p-20">
      <div className="flex flex-col md:flew-row items-center justify-between gap-4 border-b  border-gray-500 pb-8 ">
         {/* Logo 4:58*/} {/* 5:11 correccion responsive//flex-col*/}        
         
         <div className="xl:w-1/6 text-center -mt-4">
          <a href='#' className="text-2xl font-bold text-white relative p-1 ">
          Power<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="flex absolute -left-3 -bottom-3 text-primary -z-10" />
          </a>
         </div>

        {/* Social media //flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-8*/}
       <nav className="flex items-center gap-4">
         <a href="#" 
            className="block text-white p-4 bg-primary rounded-full "> {" "}
            <RiInstagramLine/>
         </a>
         <a href="#" 
            className="block text-white p-4 bg-primary rounded-full "> {" "}
            <RiFacebookLine/>
         </a>
         <a href="#" 
            className="block text-white p-4 bg-primary rounded-full "> {" "}
            <RiTwitterLine/>
         </a>
         <a href="#" 
            className="block text-white p-4 bg-primary rounded-full "> {" "}
            <RiGithubLine/>
         </a>
       </nav>
      </div>
       <div className="mt-8 ">
          <h3 className="text-lg font-bold text-white text-center md:text-left">Company</h3>
          <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <a href="#" className="black text-gray-300 mt-4 hover:text-white transition-colors">
                About Us
            </a>
            <a href="#" className="black text-gray-300 mt-4 hover:text-white transition-colors">
                Press
            </a>
            <a href="#" className="black text-gray-300 mt-4 hover:text-white transition-colors">
                Investors
            </a>
            <a href="#" className="black text-gray-300 mt-4 hover:text-white transition-colors">
                Events
            </a>
            <a href="#" className="black text-gray-300 mt-4 hover:text-white transition-colors">
                Terms of use
            </a>
            <a href="#" className="black text-gray-300 mt-4 hover:text-white transition-colors">
                Privacy policy
            </a>
            <button
              type="button"
              className="font-semibold py-2 px-6 bg-primary text-white rounded-xl">
                Contact Us
            </button>
          </nav>
       </div>
       <div className="mt-20">
          <p className="text-gray-300 text-center">
          © Power 2021 - All Rights Reserved
         </p>
       </div>
    </footer>
  )
}

export default Footer
