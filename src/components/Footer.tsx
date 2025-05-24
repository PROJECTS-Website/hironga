
const Footer = () => {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Glowing divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-glow/50 to-transparent mb-8"></div>
        
        <div className="text-center">
          <p className="text-soft-glow/70">
            Crafted by <span className="text-cyber-glow font-medium">Hiro</span>, fueled by TypeScript & dreams.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
