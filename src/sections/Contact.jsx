import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Dribbble, Send } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/AnshikaBansal1510', icon: <Github size={20} />, color: 'bg-gray-900 hover:bg-gray-800' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anshikabansal01/', icon: <Linkedin size={20} />, color: 'bg-blue-700 hover:bg-blue-600' },
  { name: 'Instagram', url: '#', icon: <Instagram size={20} />, color: 'bg-pink-600 hover:bg-pink-500' },
];

const Contact = () => {
  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="Let's create something amazing together"
    >
      <section id="contact" className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <h2 className="text-5xl md:text-7xl font-sans text-cyan-neon leading-tight">
               Like my work?
             </h2>
             <p className="text-2xl md:text-3xl font-bold text-white">
               Let&apos;s Connect!
             </p>
             <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Have an idea brewing? I&apos;m just a quick message away. 
            </p>
          </div>

          <div className="space-y-8 md:pl-20">
             

             {/* Email */}
             <div className="flex items-start gap-4">
                <Mail className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Write an email</p>
                   <a href="mailto:anshikabansal1618@gmail.com" className="text-gray-400 hover:text-purple-neon transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-purple-neon">anshikabansal1618@gmail.com</a>
                </div>
             </div>

             {/* LinkedIn */}
             <div className="flex items-start gap-4">
                <Linkedin className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Connect with me on Linkedin</p>
                   <a href="https://www.linkedin.com/in/anshikabansal01/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-neon transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-purple-neon">linkedin.com/in/anshikabansal01/</a>
                </div>
             </div>

             {/* GitHub */}
             <div className="flex items-start gap-4">
                <Github className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Connect with me on Github</p>
                   <a href="https://github.com/AnshikaBansal1510" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-neon transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-purple-neon">github.com/AnshikaBansal1510</a>
                </div>
             </div>
          </div>
        </section>
    </SectionWrapper>
  );
};

export default Contact;