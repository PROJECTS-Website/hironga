
import { Mail, Github, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

const AdvancedFooter = () => {
  const portfolioLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:hiro@strelizia.space',
      label: 'Email',
    },
    {
      icon: Github,
      href: 'https://github.com/streliziasys',
      label: 'GitHub',
    },
    {
      icon: MessageCircleMore,
      href: 'https://dsc.gg/streliziahub',
      label: 'Discord',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-container pt-20 pb-12">
      {/* Glowing divider */}
      <motion.div 
        className="w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/60 to-transparent mb-16"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          boxShadow: '0 0 20px #0F969C, 0 0 40px #0F969C',
        }}
      />
      
      {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* About Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-cyber-accent glowing-text">About</h3>
          <p className="text-glow-text/80 leading-relaxed">
            Hiro is a full-stack dev building future-first digital experiences with precision, 
            performance, and an eye for aesthetic perfection.
          </p>
        </motion.div>

        {/* Links Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-cyber-accent glowing-text">Portfolio</h3>
          <div className="space-y-3">
            {portfolioLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block text-glow-text/80 hover:text-cyber-accent transition-colors relative group"
                whileHover={{ x: 5 }}
              >
                {link.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-cyber-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Connect Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-bold text-cyber-accent glowing-text">Connect</h3>
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="p-3 rounded-xl bg-card-bg/30 border border-cyber-accent/20 hover:border-cyber-accent/60 transition-all duration-300"
                    whileHover={{
                      boxShadow: '0 0 20px #0F969C, 0 0 40px #0F969C',
                    }}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-cyber-accent group-hover:text-glow-text transition-colors" />
                  </motion.div>
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-dark-section rounded-lg text-sm text-glow-text border border-cyber-accent/30 whitespace-nowrap pointer-events-none"
                  >
                    {social.label}
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <motion.div 
        className="text-center border-t border-cyber-accent/20 pt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p className="text-lg text-glow-text/80">
          Crafted by <span className="text-cyber-accent font-bold glowing-text">Hiro</span> — with Vite, TypeScript, and unholy amounts of Tailwind.
        </p>
      </motion.div>
    </footer>
  );
};

export default AdvancedFooter;
