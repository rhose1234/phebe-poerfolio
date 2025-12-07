import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  return (
    <div className='bg-white dark:bg-black px-10 md:px-20 lg:px-20' id='footer'>
    <div className=" max-w-5xl md:max-w-7xl lg:max-w-7xl mx-auto py-10 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-6 border-t border-gray-800">
      
      <p className="text-center text-sm text-gray-600 dark:text-purple">
        &copy; {new Date().getFullYear()} Phebe Testimony. All rights reserved.
      </p>  
      <div className="flex space-x-6">
        <a href="https://www.instagram.com/projectmanager_productmanager?igsh=MWhlOWpjcnM1NnY4cg%3D%3D&utm_source=qr" className="text-purple dark:text-purple hover:text-purple transition" target="_blank" rel="noopener noreferrer">
          <FaInstagram/>
        </a>
        <a
          href="mailto:akoredephebe2@gmail.com"
          className="text-purple dark:text-purple hover:text-purple transition"
          rel="noopener noreferrer"
        >
          <SiGmail />
        </a>

        <a href="https://www.tiktok.com/@phebetestimony?_r=1&_t=ZS-91YmnNx63H6" className="text-purple dark:text-purple hover:text-purple transition" target="_blank" rel="noopener noreferrer">
          <IoLogoTiktok/>
        </a>
        <a href="https://x.com/phebeakorede_?s=21" className="text-purple dark:text-purple hover:text-purple transition" target="_blank" rel="noopener noreferrer">
          <FaXTwitter/>
        </a>
      </div>

    </div>
    </div>
  )
}
