import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Education"
      subtitle="My academic journey cultivated the discipline and work ethic that drive my technical growth."
    >
      <section className="py-24 px-6 relative z-10" id="education">
        <div className="max-w-4xl mx-auto">

          <div className="relative border-l border-slate-800 ml-4 md:ml-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Node */}
              <div className="absolute w-4 h-4 bg-cyan-neon rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_#00f0ff]"></div>
              
              <span className="text-purple-neon font-mono text-sm">2023-Present</span>
              <h3 className="text-2xl font-bold text-white mt-2">B.Tech in Information Technology</h3>
              <h4 className="text-lg text-slate-400 mb-4">Bhagwan Parshuram Institute Of Technology (GGSIPU)</h4>
              <p className="text-slate-500 leading-relaxed bg-surface p-4 rounded-lg border border-slate-800">
                CGPA : 9.64 (Rank 1 in college and Rank 2 in GGSIPU)
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline Node */}
              <div className="absolute w-4 h-4 bg-cyan-neon rounded-full -left-[8.5px] top-1 shadow-[0_0_10px_#00f0ff]"></div>
              
              <span className="text-purple-neon font-mono text-sm">2008-2022</span>
              <h3 className="text-2xl font-bold text-white mt-2">Elementary and Senior Secondary Education</h3>
              <h4 className="text-lg text-slate-400 mb-4">Aadharshila Vidyapeeth</h4>
              <p className="text-slate-500 leading-relaxed bg-surface p-4 rounded-lg border border-slate-800">
                Shaped strong academic foundation and problem-solving mindset.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}