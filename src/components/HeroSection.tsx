
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-void via-dark-section to-cyber-accent/20" />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 text-cyber-accent text-3xl opacity-40 floating-element">{'<>'}</div>
        <div className="absolute top-1/3 right-1/4 text-glow-text text-2xl opacity-30 floating-element" style={{ animationDelay: '2s' }}>#</div>
        <div className="absolute bottom-1/3 left-1/3 text-cyber-accent text-2xl opacity-35 floating-element" style={{ animationDelay: '4s' }}>✦</div>
        <div className="absolute top-2/3 right-1/3 text-soft-glow text-2xl opacity-40 floating-element" style={{ animationDelay: '1s' }}>⟡</div>
        <div className="absolute top-1/2 left-1/6 text-cyber-accent text-xl opacity-25 floating-element" style={{ animationDelay: '3s' }}>◆</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold mb-8 glowing-text animate-text-glow-pulse glint-effect">
            Hiro
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-glow-text/90 font-light max-w-4xl mx-auto leading-relaxed mb-8">
            I build{' '}
            <span className="text-cyber-accent font-semibold">Minecraft</span>,{' '}
            <span className="text-cyber-accent font-semibold">Discord</span>, and{' '}
            <span className="text-cyber-accent font-semibold">Web</span> experiences with power and precision.
          </p>
          
          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="w-6 h-10 border-2 border-cyber-accent/60 rounded-full flex justify-center p-2 animate-pulse-glow">
              <div className="w-1 h-3 bg-cyber-accent rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
