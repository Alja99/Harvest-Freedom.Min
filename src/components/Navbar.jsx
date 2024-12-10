  import React, { useState } from 'react'
 import logo from '../assets/img/logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-[#007521] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="mailto:harvestfm2017@gmail.com" className="hover:text-gray-200">
              harvestfm2017@gmail.com
            </a>
            <span className="hidden md:inline">•</span>
            <a href="tel:+231555664251" className="hidden md:inline hover:text-gray-200">
              +231555664251
            </a>
            <span className="hidden md:inline">/</span> 
            <a href="tel:+231770252385" className="hidden md:inline hover:text-gray-200">
              +231770252385
            </a>
          </div>
          <div className="flex items-center space-x-4"> 
            <a href="#" className="hover:text-gray-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d=""/>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Harvest Freedom Ministries Worldwide" className="h-16 w-16 object-contain" />
              <span className="ml-3 text-xl font-semibold text-gray-900">
                Harvest Freedom<br />Ministries Worldwide
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-[#D2040A]">Home</a>
              <a href="#about" className="text-gray-900 hover:text-[#D2040A]">Our Church</a>
              <a href="#services" className="text-gray-900 hover:text-[#D2040A]">Services</a>
              <a href="#sermons" className="text-gray-900 hover:text-[#D2040A]">Sermons</a>
              <a href="#contact" className="text-gray-900 hover:text-[#D2040A]">Contact Us</a>
              <button className="bg-[#D2040A] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                Live Service
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-900 hover:text-[#D2040A]">Home</a>
                <a href="#about" className="text-gray-900 hover:text-[#D2040A]">Our Church</a>
                <a href="#services" className="text-gray-900 hover:text-[#D2040A]">Services</a>
                <a href="#sermons" className="text-gray-900 hover:text-[#D2040A]">Sermons</a>
                <a href="#contact" className="text-gray-900 hover:text-[#D2040A]">Contact Us</a>
                <button className="bg-[#D2040A] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors w-full">
                  Live Service
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar