import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const techCategories = [
  {
    name: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Framer Motion"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "JWT", "Authentication"]
  },
  {
    name: "Database & Tools",
    skills: ["MongoDB", "SQL", "Git", "GitHub", "Postman"]
  },
  {
    name: "Architecture",
    skills: ["System Design", "Data Structures", "Algorithms"]
  }
];

export default function TechStack() {
  return (
    <SectionWrapper
      id="tech"
      title="Technical Expertise"
      subtitle="Technologies I work with"
    >
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4-[150px 150px 150px 150px] gap-12 px-5 justify-items-center">
            {techCategories.map((category, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="border border-slate-800 rounded-xl p-6 bg-surface hover:shadow-[0_0_20px_rgba(112,0,255,0.2)] transition-shadow"
              >
                <h3 className="text-cyan-neon font-mono mb-4 text-sm uppercase tracking-wider">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span key={j} className="px-3 py-2 bg-[#1a1a1a] text-slate-300 text-lg rounded border border-slate-700 hover:border-purple-neon transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> 
    </SectionWrapper>
  );
}