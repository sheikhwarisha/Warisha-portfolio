import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import devImg from './assets/dev-illustration.png'; // Make sure this path is correct

const techTags = [
  "#javascript", "#react.js", "#redux", "#node.js", "#express.js", "#mongoDB",
  "#mongoose", "#cloudinary", "#ejs", "#html", "#css", "#sass", "#bootstrap",
  "#tailwind", "#git", "#github", "#aws", "#terminal", "#adobeXD", "#figma"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-black text-gray-200 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-pink-500">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            I help business owners and busy web developers to design & develop creative websites that fit their vision and attract the visitors to stay forever. Technologies and tools that I use to create such awesome websites:
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-3">
            {techTags.map(tag => (
              <span
                key={tag}
                className="bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-300 hover:bg-pink-500 hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* MERN Stack */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-pink-500 mb-4">MERN STACK</h3>
            <div className="flex items-center space-x-10 text-5xl">
              <SiMongodb className="text-green-500" title="MongoDB" />
              <SiExpress className="text-gray-200" title="Express" />
              <FaReact className="text-pink-500" title="React" />
              <FaNodeJs className="text-green-400" title="Node.js" />
            </div>
            <div className="flex items-center justify-around text-sm text-pink-400 mt-2 font-medium">
              <span>M</span><span>E</span><span>R</span><span>N</span>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="md:w-1/2">
          <img
            src={devImg}
            alt="developer illustration"
            className="w-full max-w-md mx-auto animate-fadeIn drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
