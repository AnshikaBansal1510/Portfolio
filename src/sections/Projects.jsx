import React from 'react'
import { useState } from 'react';
import { Briefcase, User, FileText, Linkedin, Phone, Mail, Github, ExternalLink, Menu, X } from "lucide-react";
import SectionWrapper from '../components/SectionWrapper';
import mindmoose from './../assets/mindmoose2.png';
import yappify from './../assets/yappify.png';
import shuddhi from './../assets/shuddhi.png';
import teampoint from './../assets/teampoint.png';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      title: "MindMoose",
      description: "AI-powered mental wellness platform for personalized self-care strategies and context-aware coversational support.",
      tags: ["ReactJS", "NodeJS","ExpressJS", "MongoDB", "TailwindCSS", "Groq SDK", "Gemini API"],
      demoLink: "https://mind-moose.vercel.app/",
      codeLink: "https://github.com/AnshikaBansal1510/MindMoose",
      featured: true
    },
    {
      title: "Yappify",
      description: "Social learning platform integrating Stream SDK for real-time video conferencing and chat.",
      tags: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Stream SDK", "TailwindCSS"],
      demoLink: "https://yappify-t3ql.onrender.com/",
      codeLink: "https://github.com/AnshikaBansal1510/yappify-project",
      featured: true
    },
    {
      title: "Shuddhi",
      description: "Build during SIH hackathon, this platform was designed to solve waste segregation.",
      tags: ["ReactJS", "HTML5", "TailwindCSS","Javascript"],
      demoLink: "#",
      codeLink: "https://github.com/AnshikaBansal1510/Shuddhi",
      featured: false
    },
    {
      title: "TeamPoint",
      description: "A collaborative workspace that enables teams to manage projects, assign tasks, and track progress efficiently from one place.",
      tags: ["ReactJS", "HTML5", "TailwindCSS","Javascript", "Syncfusion"],
      demoLink: "#",
      codeLink: "https://github.com/AnshikaBansal1510/TeamPoint",
      featured: false
    },
  ];
  return (
    <SectionWrapper
      id="projects"
      title="Featured Projects"
      subtitle="Projects that highlight my technical skills, creativity, and passion for building meaningful solutions."
    >
    <section id="work" className="py-20 space-y-12">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
          <div key={index} className="group rounded-3xl bg-[#1A1A1A] border border-white/10 overflow-hidden hover:border-cyan-200 transition-all">
            {/* Image Area */}
            <div className="h-49 relative overflow-hidden rounded-t-2xl">
              {project.title === "MindMoose" ? (
                <img src={mindmoose} alt={project.title} fill className="object-cover" />
              ) : project.title === "Yappify" ? (
                <img src={yappify} alt={project.title} fill className="object-cover" />
              ) : project.title === "Shuddhi" ? (
                <img src={shuddhi} alt={project.title} fill className="object-cover" />
              ) : project.title === "TeamPoint" ? (
                <img src={teampoint} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 bg-black group-hover:bg-black/80 transition-colors" />
              )}

              {/* Overlay buttons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <a href={project.demoLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-cyan-neon transition-colors">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={project.codeLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-cyan-neon transition-colors">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-neon transition-colors">{project.title}</h3>
                {project.featured && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-400">Completed</span>
                  </div>
                )}
              </div>
              
              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white font-medium"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
      </div>
    </section>
    </SectionWrapper>
  )
}

export default Projects