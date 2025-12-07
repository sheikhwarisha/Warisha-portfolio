import React from 'react';
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 max-w-lg mx-auto text-center">
      <h2 className="text-3xl font-semibold text-pink-500 mb-8">Contact</h2>

      <form className="space-y-4 mb-6">
        <input type="text" placeholder="Name" className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <textarea placeholder="Message" rows="4" className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-md font-medium transform transition duration-300 hover:bg-pink-600 hover:scale-105">
          Send Message
        </button>
      </form>

      <p className="mb-4 text-white/80">Or connect with me on:</p>

      <div className="flex justify-center space-x-6 text-2xl text-pink-500">

        <a href=" https://www.facebook.com/profile.php?
 id=100090347394418" target="_blank" className="hover:text-pink-600 transition">
          <FaFacebookF />
        </a>

        <a href="https://linkedin.com/in/warisha-faiz-021b66263/" target="_blank" className="hover:text-pink-600 transition">
          <FaLinkedin />
        </a>

        <a href=" https://github.com/sheikhwarisha/" target="_blank" className="hover:text-pink-600 transition">
          <FaGithub />
        </a>

      </div>
    </section>
  );
};

export default ContactSection;
