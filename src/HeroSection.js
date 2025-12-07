// src/components/HeroSection.jsx
import React from 'react';
import warishaImage from "./assets/warisha.jpg";  

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-pink-600 via-black to-pink-800 flex flex-col md:flex-row items-center px-6 md:px-16 pt-24 md:pt-0">

      {/* Left Side Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-300 mb-4">
          Warisha Faiz
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Full-Stack Developer
        </p>

        <a href="#contact">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white text-lg rounded-md transition transform hover:scale-105">
            Contact Me
          </button>
        </a>
      </div>

      {/* Right Side Image With Glow */}
      <div className="flex w-full md:w-1/2 justify-center mt-10 md:mt-0">
        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 rounded-full scale-110 
            bg-pink-500 opacity-60 blur-xl
            animate-pulse-fast">
          </div>

          {/* Image */}
          <img
            src={warishaImage}
            alt="Warisha"
            className="relative w-72 h-72 object-cover rounded-full shadow-2xl border-2 border-pink-300"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
