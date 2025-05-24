
const Footer = () => {
  return (
    <footer className="section-container pt-12 pb-8">
      {/* Glowing divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/60 to-transparent mb-12 animate-pulse-glow"></div>
      
      <div className="text-center">
        <p className="text-xl text-glow-text/80 font-medium">
          Crafted by <span className="text-cyber-accent font-bold glowing-text">Hiro</span>, fueled by TypeScript & dreams.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
