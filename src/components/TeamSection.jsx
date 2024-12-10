import React from 'react'
import member1 from '../assets/img/member1.png'
import member2 from '../assets/img/member2.png'
import Pastor1 from '../assets/img/pastor1.jpg'
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Apostle Peter White",
      role: "Senior Pastor",
      image: Pastor1
    },
    {
      name: "Pastor Rachel",
      role: "Associate Pastor",
      image: member2
    },
    {
      name: "Minister David",
      role: "Worship Leader",
      image: member1
    },
    {
      name: "Minister Grace",
      role: "Youth Pastor",
      image: member2
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Board Members</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of leaders who serve and guide our community with wisdom and compassion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
