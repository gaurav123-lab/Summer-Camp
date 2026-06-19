import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white mt-10 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-bold text-orange-500">
            KidTech
          </h2>

          <p className="mt-4 text-gray-600">
            Empowering kids to discover,
            learn and grow for a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                Home
              </a>
            </li>

            <li>
              <a href="#workshop" className="text-gray-600 hover:text-orange-500">
                Workshops
              </a>
            </li>

            <li>
              <a href="#faq" className="text-gray-600 hover:text-orange-500">
                FAQ
              </a>
            </li>

            <li>
              <a href="#contact" className="text-gray-600 hover:text-orange-500">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">
            Company
          </h3>

          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>

      </div>

      <div className="text-center py-6 border-t text-gray-500">
        © 2026 KidTech. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer