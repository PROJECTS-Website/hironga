
import { Github, Mail, MessageCircleMore } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contacts = [
    {
      name: 'Discord',
      url: 'https://dsc.gg/streliziahub',
      icon: <MessageCircleMore className="w-8 h-8" />,
      description: 'Join the community',
      color: 'from-purple-500/20 to-indigo-500/20',
      hoverColor: 'hover:from-purple-500/40 hover:to-indigo-500/40'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/streliziasys',
      icon: <Github className="w-8 h-8" />,
      description: 'View my code',
      color: 'from-gray-500/20 to-slate-500/20',
      hoverColor: 'hover:from-gray-500/40 hover:to-slate-500/40'
    },
    {
      name: 'Email',
      url: 'mailto:hiro@strelizia.space',
      icon: <Mail className="w-8 h-8" />,
      description: 'Let\'s work together',
      color: 'from-cyan-500/20 to-blue-500/20',
      hoverColor: 'hover:from-cyan-500/40 hover:to-blue-500/40'
    }
  ];

  return (
    <section className="section-container" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-cyber-accent mb-8 glint-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hire me for your work.
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-glow-text/80 mb-16 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to bring your ideas to life? Let's collaborate and build something extraordinary together.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.url}
              target={contact.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl p-8 backdrop-blur-lg border border-cyber-accent/30 bg-gradient-to-br ${contact.color} ${contact.hoverColor} transition-all duration-500`}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Holographic border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyber-accent/0 via-cyber-accent/30 to-cyber-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-accent/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-glow-text/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
                <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-cyber-accent/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-600 delay-100"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center space-y-4">
                <motion.div 
                  className="text-cyber-accent group-hover:text-glow-text transition-colors duration-300 icon-glow"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>
                <div>
                  <div className="text-xl font-bold mb-2 text-glow-text group-hover:text-white transition-colors duration-300">
                    {contact.name}
                  </div>
                  <div className="text-lg text-glow-text/70 group-hover:text-soft-glow/90 transition-colors duration-300">
                    {contact.description}
                  </div>
                </div>
              </div>

              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-2xl bg-cyber-accent/20 scale-0 group-active:scale-100 transition-transform duration-300 ease-out"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
