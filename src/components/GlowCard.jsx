import { motion } from 'framer-motion';

export default function GlowCard({ children, color = "cyan", className = "" }) {
  // Determine hover color dynamically based on props
  const borderHover = color === "cyan" ? "hover:border-cyan-neon/50" : "hover:border-purple-neon/50";
  const shadowHover = color === "cyan" ? "hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]" : "hover:shadow-[0_0_20px_rgba(112,0,255,0.15)]";

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-surface border border-slate-800 p-6 rounded-xl backdrop-blur-md relative overflow-hidden transition-all duration-300 ${borderHover} ${shadowHover} ${className}`}
    >
      {/* Subtle top-right ambient light bleed */}
      <div 
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: color === "cyan" ? "#00f0ff" : "#7000ff" }}
      ></div>
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}