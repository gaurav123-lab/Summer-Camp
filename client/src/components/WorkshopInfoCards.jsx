import React from "react";
import {
  FaUsers,
  FaClock,
  FaLaptop,
  FaRupeeSign,
  FaCalendarAlt,
} from "react-icons/fa";

function WorkshopInfoCards() {
  return (
    <>
       <section  id="workshop" className="max-w-7xl mx-auto px-6 relative -mt-20 z-20">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {/* Age Group */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
              <FaUsers className="text-orange-500 text-xl" />
            </div>

            <p className="text-gray-500 text-sm">
              Age Group
            </p>

            <h3 className="font-bold text-lg mt-1">
              8-14 Years
            </h3>
          </div>

          {/* Duration */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <FaClock className="text-yellow-500 text-xl" />
            </div>

            <p className="text-gray-500 text-sm">
              Duration
            </p>

            <h3 className="font-bold text-lg mt-1">
              4 Weeks
            </h3>
          </div>

          {/* Mode */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <FaLaptop className="text-purple-500 text-xl" />
            </div>

            <p className="text-gray-500 text-sm">
              Mode
            </p>

            <h3 className="font-bold text-lg mt-1">
              Online
            </h3>
          </div>

          {/* Fee */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-3">
              <FaRupeeSign className="text-pink-500 text-xl" />
            </div>

            <p className="text-gray-500 text-sm">
              Fee
            </p>

            <h3 className="font-bold text-lg mt-1">
              ₹2,999
            </h3>
          </div>

          {/* Start Date */}
          <div className="text-center">
            <div className="w-14 h-14 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
              <FaCalendarAlt className="text-green-500 text-xl" />
            </div>

            <p className="text-gray-500 text-sm">
              Start Date
            </p>

            <h3 className="font-bold text-lg mt-1">
              15 July 2026
            </h3>
          </div>

        </div>

      </div>
    </section>  
    </>
  );
}

export default WorkshopInfoCards;
