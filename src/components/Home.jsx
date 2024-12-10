import React from 'react'
import Button from './Button'
import TeamSection from './TeamSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import church from '../assets/img/church.png'

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Sunday Service",
      time: "9:00 AM - 11:00 AM",
      description: "Join us for worship and the Word"
    },
    {
      id: 2,
      title: "Bible Study",
      time: "Wednesday 6:00 PM",
      description: "Deep dive into scripture"
    },
    {
      id: 3,
      title: "Youth Ministry",
      time: "Friday 5:00 PM",
      description: "For young people ages 13-25"
    },
    {
      id: 4,
      title: "Prayer Meeting",
      time: "Tuesday 7:00 PM",
      description: "Community prayer and intercession"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(210, 4, 10, 0.8), rgba(0, 117, 33, 0.8)), url(${church})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Salvation Is Here, Join <br /> our community
          </h1>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-[#D2040A] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
              Join Us
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-custom-red hover:text-[#D2040A] transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-custom-red font-medium mb-2">{service.time}</p>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div id="team">
        <TeamSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  )
}

export default Home
