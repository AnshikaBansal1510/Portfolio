import React from 'react';

const SectionWrapper = ({ children, id, title, subtitle }) => {
  return (
    <section id={id} className="py-20 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-neon to-purple-neon mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-white max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
};

export default SectionWrapper;