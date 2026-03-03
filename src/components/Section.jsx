import { motion } from 'framer-motion';

export default function Section({ id, title, children, accent = "cyan", className = "" }) {
  const gradientClass = accent === "cyan" ? "from-cyan-neon" : "from-purple-neon";

  return (
    <section className={`py-24 px-6 relative z-10 ${className}`} id={id}>
      <div className="max-w-screen-2xl mx-auto">
        
        {title && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h2>
            <div className={`h-1 w-24 bg-gradient-to-r ${gradientClass} to-transparent`}></div>
          </motion.div>
        )}

        {/* Section Content */}
        {children}
        
      </div>
    </section>
  );
}