import React, { useState, useEffect } from 'react';
import { User, Award } from 'lucide-react';
import photo from "./../assets/photo2.png"

const SectionWrapper = ({ id, title, subtitle, children }) => (
  <section id={id} className="py-20 px-4 md:px-8 lg:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-purple-neon mb-4">
          {title}
        </h2>
        <p className="text-xl text-white">{subtitle}</p>
      </div>
      {children}
    </div>
  </section>
);

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="Get to know me better"
    >
      <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-16">
        {/* Image Section */}
        <div className="w-300 lg:w-1/3 flex justify-center">
          <div className="relative group">
            {/* Animated background circle */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Main image container */}
            <div className={`relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-700 hover:scale-105 ${
              imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <img
                src={photo}
                alt="Anshika Bansal"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse opacity-60"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-2/3 space-y-8">
          {/* Header */}
          <div className={`transform transition-all duration-700 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="text-gray-700" size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Who am I?
              </h3>
            </div>
          </div>
          
          {/* Description */}
          <div className={`space-y-6 transform transition-all duration-700 delay-200 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-black/5 to-gray-900 p-6 rounded-2xl shadow-lg border border-black hover:shadow-xl transition-shadow duration-300">
              <p className="text-white-700 leading-relaxed text-lg">
                Hi, I'm <span className="font-semibold text-blue-600">Anshika Bansal</span>, a passionate Full Stack Web Developer and an enthusiastic learner in the world of GenAI. With a strong foundation in both frontend 
                and backend technologies, I work towards delivering intuitive digital solutions that balance performance with engaging design.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-black/5 to-gray-900 p-6 rounded-2xl border border-black hover:shadow-lg transition-shadow duration-300">
              <p className="text-white leading-relaxed text-lg">
                I am proficient in Data Structures & Algorithms. Beyond coding, I have spearheaded a community of 250+ juniors in college, highlighting my leadership and communication skills. As someone committed to continuous growth, I embrace new ideas with an open and curious mind.
              </p>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className={`transform transition-all duration-700 delay-400 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-black/5 to-gray-900 p-8 rounded-2xl border border-black hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <h4 className="font-bold text-white mb-4 text-xl flex items-center justify-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award size={16} className="text-blue-600" />
                  </div>
                  Extracurricular Highlights
                </h4>
                <p className="text-md text-white font-medium leading-relaxed">
                  Senior Council @Hash Define | Initiative Lead @Mentor Minds (community of 200+) 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionWrapper>  
  );
};

export default About;