import Hero from './sections/Hero';
import CPStats from './sections/CPStats';
import Contact from './sections/Contact';
import Education from './sections/Education';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import About from './sections/About';

function App() {
  //const isUnlocked = useKonamiCode();

  return (
    <div className="bg-space min-h-screen text-slate-300 font-sans selection:bg-cyan-neon selection:text-space relative overflow-hidden">
      
      {/* Background Grid Pattern (Fixed & Visible) */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Portfolio Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <CPStats />
        {/* <Story /> */}
        <TechStack />
        <Projects />
        <Education />
        {/* <Achievements /> */}
        {/* <Testimonials /> */}
        <Contact />
      </div>

    </div>
  );
}

export default App;