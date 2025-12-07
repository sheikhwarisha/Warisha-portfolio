import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'ReactJS', level: '90%' },
    { name: 'NodeJS', level: '85%' },
    { name: 'ExpressJS', level: '80%' },
    { name: 'TailwindCSS', level: '75%' },
    { name: 'MongoDB', level: '70%' }
  ];

  return (
    <section id="skills" className="py-16 max-w-xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-pink-500 mb-8">Skills</h2>
      <div className="space-y-6">

        {skills.map(skill => (
          <div key={skill.name} className="opacity-0 animate-fadeInUp">
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-pink-500 h-4 rounded-full animate-fillBar"
                style={{ '--bar-width': skill.level }}
              ></div>
            </div>
          </div>
        ))}

      </div>

      {/* Tailwind custom animations */}
      <style>
        {`
        @keyframes fillBar {
          from { width: 0; }
          to { width: var(--bar-width); }
        }
        .animate-fillBar {
          animation: fillBar 1.5s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}
      </style>
    </section>
  );
};

export default SkillsSection;
