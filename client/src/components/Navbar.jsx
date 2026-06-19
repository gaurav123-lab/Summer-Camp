import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">KidTech</h1>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-orange-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#workshop" className="hover:text-orange-500 transition">
              Workshop
            </a>
          </li>

          <li>
            <a href="#faq" className="hover:text-orange-500 transition">
              FAQ
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="#faq"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
        >
          Enroll Now
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col p-6 gap-4">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#workshop">Workshop</a>
            </li>

            <li>
              <a href="#faq">FAQ</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a
                href="#faq"
                className="bg-orange-500 text-white px-4 py-3 rounded-xl text-center"
              >
                Enroll Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
