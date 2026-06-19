import React from 'react'
import { FaUsers, FaStar, FaChalkboardTeacher, FaAward } from "react-icons/fa";
function TrustedSection() {
      const stats = [
    {
      icon: <FaUsers />,
      number: "10,000+",
      title: "Students Enrolled",
    },
    {
      icon: <FaStar />,
      number: "4.9/5",
      title: "Average Rating",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "50+",
      title: "Expert Mentors",
    },
    {
      icon: <FaAward />,
      number: "500+",
      title: "Workshops Conducted",
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl shadow-lg p-10">

        <h2 className="text-center text-3xl font-bold mb-3">
          Trusted by Parents Across World
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Helping children learn AI, Robotics and Coding through
          fun and interactive experiences.
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl text-orange-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-3xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default TrustedSection