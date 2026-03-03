import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import avatar2 from '../assets/avatar8.png'
import { Briefcase, User, FileText, Linkedin, Phone, Mail, Github, ExternalLink, Menu, X } from "lucide-react";


const Terminal = () => {
  const [history, setHistory] = useState([{ cmd: '', output: ' Heyy!! To know about me\n Type "whoami", "skills", or "contact".' }]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';
      
      if (cmd === 'whoami') output = 'ANSHIKA. Problem Solver. MERN Stack Developer.\n GenAI Enthusiast.';
      else if (cmd === 'skills') output = 'DSA, MERN Stack, Java, SQL, System Design.';
      else if (cmd === 'contact') output = 'Initiating protocol... email me at\n anshikabansal1618@gmail.com';
      else if (cmd === '') output = '';
      else output = `Command not found: ${cmd}`;

      setHistory([...history, { cmd: `guest@anshika:~$ ${cmd}`, output }]);
      setInput('');
    }
  };

  return (
    <div className="relative flex items-stretch justify-start w-full h-[380px] md:h-[450px]">
      
      {/* Terminal */}
      <div 
        className="bg-[#121212] border border-slate-800 rounded-lg p-4 font-mono text-sm w-full max-w-3xl h-full shadow-2xl shadow-purple-neon/10"
        onClick={() => inputRef.current.focus()}
      >
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
  
        <div className="h-full overflow-y-auto flex flex-col gap-1 text-slate-400">
          {history.map((line, i) => (
            <div key={i}>
              <div className="text-cyan-neon">{line.cmd}</div>
              <div className="text-slate-300 whitespace-pre-line">{line.output}</div>
            </div>
          ))}
  
          <div className="flex text-cyan-neon mt-2">
            <span>guest@anshika:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent outline-none ml-2 text-slate-200 flex-1"
              autoFocus
            />
          </div>
        </div>
      </div>
  
      {/* Avatar overlapping */}
      <div className="absolute top-0 right-0 -mr-20 md:-mr-32 bottom-10 h-[350px] md:h-[530px] z-20">
        <img
          src={avatar2}
          alt="Anshika Bansal"
          className="h-full object-contain drop-shadow-2xl"
        />
      </div>
  
    </div>
  );
};

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <nav className="fixed top-0 w-full h-22 z-50 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight text-white hover:text-cyan-neon transition-colors">Anshika Bansal!</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-medium font-sans text-gray-300">
            <a href="#work" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <Briefcase size={18} /> Work
            </a>
            <a href="#about" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <User size={18} /> About
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
              <FileText size={18} /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:text-cyan-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0f0f0f] border-b border-white/10 p-6 space-y-2 shadow-2xl animate-in slide-in-from-top-5 duration-200">
            <a 
              href="#work" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5 rounded-xl p-4 transition-all"
            >
              <Briefcase size={20} /> Work
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5 rounded-xl p-4 transition-all"
            >
              <User size={20} /> About
            </a>
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-cyan-300 hover:bg-white/5 rounded-xl p-4 transition-all"
            >
              <FileText size={20} /> Resume
            </a>
          </div>
        )}
      </nav>

      <section className="min-h-screen flex items-center justify-center bg-hero-glow relative px-2 pt-10">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-5 items-center z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='flex justify-items-end gap-8'>
              <div className="flex items-center gap-2 px-5 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-400">Open to work</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              I Solve Problems <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-purple-neon">
                That Others Avoid.
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg border-l-2 border-purple-neon pl-4">
              Knight on LeetCode | 1100+ Problems Solved | MERN Stack Developer | GenAI Enthusiast
            </p>
            
            <div className="flex flex-wrap gap-7 mb-8">
              <a href="#contact">
              <button className="px-7 py-4 bg-cyan-neon text-space font-semibold rounded hover:bg-white transition-colors">
                Get in Touch
              </button>
              </a>
              <button className="px-9 py-4 border border-slate-700 hover:border-cyan-neon text-white rounded transition-colors backdrop-blur-sm">
                Download Resume
              </button>
            </div>

            <div className="flex gap-6 text-3xl text-slate-500">
              <a href="https://github.com/AnshikaBansal1510" className="hover:text-cyan-neon transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/anshikabansal01/" className="hover:text-[#0077b5] transition-colors"><FaLinkedin /></a>
              <a href="https://leetcode.com/u/AnshikaBansal1510/" className="hover:text-purple-neon transition-colors"><SiLeetcode /></a>
              <a href="mailto:anshikabansal1618@gmail.com" className="hover:text-white transition-colors"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <Terminal />
          </motion.div>
        </div>
      </section>
    </>
  );
}