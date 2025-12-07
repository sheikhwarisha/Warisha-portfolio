// src/components/ProjectsSection.jsx
import React from 'react';
import expertpixel from "./assets/expertpixel.jpg";
import portfolioImage from "./assets/portfolio.JPG";
import curdapp from "./assets/curdapp.JPG"; 

const ProjectsSection = () => {

  const projects = [
    {
      id: 1,
      title: "Expert Pixel",
      image: expertpixel,
      link: "https://expeertpixel.netlify.app/",
      description: "Expert Pixel Website",
    },
    {
      id: 2,
      title: "My Portfolio",
      image: portfolioImage,
      link: "https://warishafaiz.netlify.app/",
      description: "Responsive Portfolio using HTML & CSS.",
    },
    {
      id: 3,
      title: "Curd App",
      image: curdapp,
      link: "https://curdappppp.netlify.app/",
      description: "Curd App With Firebase.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-3xl font-semibold text-pink-500 mb-8 text-center">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {projects.map(({ id, title, image, description, link }) => (
          <div
            key={id}
            className="
              bg-gray-800 rounded-lg overflow-hidden 
              border border-gray-700 
              animate-cardFloat will-change-transform 
              shadow-lg shadow-pink-500/20 
              hover:shadow-pink-500/40 
              transition-shadow
            "
            style={{ animationDelay: `${id * 0.4}s` }}
          >
            {/* Image */}
            <div className="w-full h-48 bg-gray-700">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>

              <a
                href={link}
                target="_blank"
                className="text-pink-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}

      </div>

      {/* Animations */}
      <style>{`
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-cardFloat {
          animation: cardFloat 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
