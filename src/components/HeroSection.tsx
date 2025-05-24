
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-void via-dark-teal to-teal-highlight opacity-90" />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 text-cyber-glow text-2xl opacity-30 floating-element">{'<>'}</div>
        <div className="absolute top-1/3 right-1/4 text-soft-glow text-xl opacity-20 floating-element" style={{ animationDelay: '2s' }}>#</div>
        <div className="absolute bottom-1/3 left-1/3 text-cyber-glow text-lg opacity-25 floating-element" style={{ animationDelay: '4s' }}>✦</div>
        <div className="absolute top-2/3 right-1/3 text-teal-highlight text-xl opacity-30 floating-element" style={{ animationDelay: '1s' }}>⟡</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-8xl md:text-9xl font-bold mb-6 text-glow animate-text-glow">
            Hiro
          </h1>
          <p className="text-xl md:text-2xl text-soft-glow/90 font-light max-w-3xl mx-auto leading-relaxed">
            I build{' '}
            <span className="text-cyber-glow font-medium">Minecraft</span>,{' '}
            <span className="text-cyber-glow font-medium">Discord</span>, and{' '}
            <span className="text-cyber-glow font-medium">Web</span> experiences with power and precision.
          </p>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-glow/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-glow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
