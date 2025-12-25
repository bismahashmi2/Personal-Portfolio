"use client"
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

 
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  const menuItems = [
    {href: "/#", label: "Home"},
    {href: "#about", label: "About"},
    {href: "#projects", label: "Projects"},
    {href: "#contact", label: "Contact"},
  ]

  return (
    <div>
      <nav className="fixed w-full bg-slate-800/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/#" className="text-xl font-bold text-cyan-400">Devfolio&trade;</Link>

          {/* desktop menus */}
          <div className="hidden md:flex items-center space-x-8 text-white">
            {
              menuItems.map((item) => (
                  <Link key={item.href} href={item.href} className='hover:text-cyan-400 transition-colors font-medium'>{item.label}</Link>
              ))
            }
          </div>
          
          {/* mobile menu button*/}
          <button 
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-lg text-white cursor-pointer">
            {
              isMobileMenuOpen ? (<XMarkIcon className="w-8 h-8"/>) : (<Bars3Icon className="w-8 h-8" />)
            }
           
          </button>
         </div>

         {/* mobile menu */}
         {
          isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="py-4 space-y-4 px-4">
                {
                  menuItems.map((item, index) => (
                    <div key={index} onClick={handleLinkClick}>
                      <Link href={item.href} className="block py-2 hover:text-cyan-400 transition-colors">{item.label}</Link>
                    </div>
                  ))
                }

              </div>
            </div>
          )
         }
      </div>
      </nav>
    </div>
  );
}

export default Navbar;