import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';

const StatCard = ({ title, value, label, color }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: `0 10px 30px -10px ${color}` }}
    className="bg-surface border border-slate-800 p-6 rounded-xl backdrop-blur-md relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-50 h-50 bg-gradient-to-bl opacity-10 blur-2xl rounded-full" style={{ backgroundImage: `radial-gradient(${color}, transparent)` }}></div>
    <h3 className="text-slate-300 font-mono text-lg mb-2">{title}</h3>
    <div className="text-4xl font-bold text-white mb-1">{value}</div>
    <div className="text-xl text-slate-400">{label}</div>
  </motion.div>
);

export default function CPStats() {
  return (
    <SectionWrapper
      id="dsa"
      title="CP and DSA Geek"
      subtitle="From brute to better to optimal: Turning TLEs into Green."
    >
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[300px_300px_300px_300px] gap-7 justify-center grid-rows-[200px]">
          <StatCard title="LeetCode" value="Knight" label="Peak Rating - 1858" color="#00f0ff" />
          <StatCard title="DSA Grind" value="1100+" label="Problems Solved" color="#7000ff" />
          <StatCard title="Codeforces" value="1173" label="Max Rating" color="#ff0000" />
          <StatCard title="CodeChef" value="2⭐" label="(Best Contest Rank: 499)" color="#00ff00" />
        </div>
      </div>
    </section>
    </SectionWrapper>
  );
}