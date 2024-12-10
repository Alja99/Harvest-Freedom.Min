import React, { useState, useEffect } from 'react'
import Apostle from '../assets/img/Apostle.png'
import Pastor1 from '../assets/img/pastor1.jpg'
import Member5 from '../assets/img/member5.jpg'
import Member6 from '../assets/img/member6.jpg' 

const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    { image: Apostle, alt: "Apostle White" },
    { image: Pastor1, alt: "Our Church" },
    { image: Member5, alt: "Church Member" },
    { image: Member6, alt: "Church Member" } 
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, []) 
 
  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="relative bg-[#007521] py-16">
      {/* Back button */}
      <button 
        onClick={prevSlide}
        className="absolute top-8 left-8 text-white hover:text-gray-200 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with pattern overlay */}
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="bg-green-400/20 rounded-lg"></div>
                ))}
              </div>
              <div className="relative h-full rounded-lg overflow-hidden">
                {/* Image slider */}
                <div 
                  className="relative w-full h-full flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="min-w-full h-full flex-shrink-0"
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-[#D2040A]' : 'bg-white opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Our Church</h2>
              <div className="w-24 h-1 bg-[#D2040A] mb-8"></div>
              <h3 className="text-2xl font-semibold mb-6">
                Harvest Freedom<br />
                Ministries Worldwide
              </h3>
              <div className="space-y-4">
                <p>
                  Welcome to Harvest Freedom Ministries Worldwide.
                  We are a vibrant community of faith dedicated to
                  spreading the message of hope, love, and freedom in
                  Christ.
                </p>
                <p>
                  Our mission is to serve, empower, and transform lives
                  through the power of the Gospel.
                </p>
                <p>
                  Our Church is made up of people from all works of life
                  and from many different counties. We all love
                  diversity and we love to see new people. We really
                  hope that you will feel right at home.
                </p>
                <p>
                  Our Sunday morning begins with a warm welcome and
                  an invitation to join in celebrating good news about
                  Jesus.
                </p>
              </div>
              <button className="mt-8 bg-[#D2040A] text-white px-8 py-3 rounded hover:bg-opacity-90 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
