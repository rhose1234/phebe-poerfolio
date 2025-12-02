'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import ThemeToggle from './themetoggle'
import Button from './button'


export default function Navbar() {

  const [open, setOpen] = useState(false)
  const closeNav = () => setOpen(false)

  return (
    <nav className="w-full py-4 sticky shadow-md bg-white text-foreground dark:bg-foreground dark:text-white top-0 z-50 border-b">

      {/* NAV CONTAINER */}
      <div className="max-w-8xl px-6 md:px-10 lg:px-20 space-x-20  flex justify-between items-center">

        {/* Logo */}
        <div className="logo">
          <Image 
            src="/logo.svg" 
            width={300} 
            height={300} 
            alt="logo" 
            className="w-16 md:w-24 hidden dark:block"
          />
          <Image 
            src="/blacklogo.svg" 
            width={300} 
            height={300} 
            alt="logo" 
            className="w-16 md:w-24 dark:hidden"
          />
        </div>

        {/* MENU + BUTTON (desktop) */}
        <div className="hidden md:flex items-center gap-20">

          {/* MENU */}
          <ul className="flex gap-8 md:text-md lg:text-md text-md ">
            <Link href="#"><li className="hover:text-purple transition" >Home</li></Link>
            <Link href="#"><li className="hover:text-purple transition" >About</li></Link>
            <Link href="#"><li className="hover:text-purple transition" >Projects</li></Link>
            <Link href="#"><li className="hover:text-purple transition" >Contact</li></Link>
            <ThemeToggle/>
           
            </ul>

          {/* BUTTON */}
          <Button className='px-8 py-3' href="https://calendly.com/akoredephebe2">Book a Call</Button>

        </div>

        {/* Mobile Menu Icon */}
        <div className="flex space-x-4 md:hidden items-center">
          <ThemeToggle/>
           <div className="cursor-pointer" onClick={() => setOpen(!open)}>
                  {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
          </div>

         
        </div>
    

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 py-6  flex flex-col gap-6 md:text-md lg:text-md text-sm ">

          <Link href="#"><span className="text-lg hover:text-purple" onClick={closeNav} >Home</span></Link>
          <Link href="#"><span className="text-lg hover:text-purple" onClick={closeNav}  >About</span></Link>
          <Link href="#"><span className="text-lg hover:text-purple" onClick={closeNav}  >Projects</span></Link>
          <Link href="#"><span className="text-lg hover:text-purple" onClick={closeNav} >Contact</span></Link>

          <Button href="https://calendly.com/akoredephebe2" className='px-8  py-3' onClick={closeNav} >Book a Call</Button>

        </div>
      )}

    </nav>
  )
}
