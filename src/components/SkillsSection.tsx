
import { Cloud, Server, Zap, Code2, Component, Palette, Brush, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    {
      name: 'Cloudflare',
      icon: <Cloud className="w-8 h-8" />,
      category: 'Infrastructure',
      level: 90,
      description: 'CDN & Edge Computing'
    },
    {
      name: 'NGINX',
      icon: <Server className="w-8 h-8" />,
      category: 'Infrastructure', 
      level: 85,
      description: 'Web Server & Proxy'
    },
    {
      name: 'Vite',
      icon: <Zap className="w-8 h-8" />,
      category: 'Build Tools',
      level: 95,
      description: 'Lightning Fast Builds'
    },
    {
      name: 'TypeScript',
      icon: <Code2 className="w-8 h-8" />,
      category: 'Languages',
      level: 92,
      description: 'Type-Safe Development'
    },
    {
      name: 'React',
      icon: <Component className="w-8 h-8" />,
      category: 'Frontend',
      level: 95,
      description: 'Modern UI Library'
    },
    {
      name: 'shadcn/ui',
      icon: <Palette className="w-8 h-8" />,
      category: 'UI Libraries',
      level: 88,
      description: 'Beautiful Components'
    },
    {
      name: 'Tailwind CSS',
      icon: <Brush className="w-8 h-8" />,
      category: 'Styling',
      level: 96,
      description: 'Utility-First CSS'
    },
    {
      name: 'Java',
      icon: <Coffee className="w-8 h-8" />,
      category: 'Languages',
      level: 80,
      description: 'Enterprise Development'
    }
  ];

  const categories = ['Infrastructure', 'Build Tools', 'Languages', 'Frontend', 'UI Libraries', 'Styling'];
  const categoryColors = {
    'Infrastructure': 'from-red-500/20 to-orange-500/20',
    'Build Tools': 'from-yellow-500/20 to-amber-500/20', 
    'Languages': 'from-blue-500/20 to-indigo-500/20',
    'Frontend': 'from-green-500/20 to-emerald-500/20',
    'UI Libraries': 'from-purple-500/20 to-violet-500/20',
    'Styling': 'from-pink-500/20 to-rose-500/20'
  };

  return (
    <section className="section-container" id="skills">
      <div className="text-center mb-16">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-cyber-accent mb-8 glint-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-glow-text/80 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Technologies and tools I use to bring ideas to life with precision and performance.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-lg border border-cyber-accent/30 bg-gradient-to-br ${categoryColors[skill.category]} hover:border-cyber-accent/60 transition-all duration-500`}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              y: -8,
              rotateY: 5,
            }}
          >
            {/* Animated border flow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-cyber-accent/50 to-transparent animate-pulse"></div>
            </div>

            {/* Floating animation background */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-cyber-accent/5 to-glow-text/5 rounded-2xl opacity-0 group-hover:opacity-100"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10 text-center">
              {/* Icon with advanced hover effects */}
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyber-accent/30 to-glow-text/30 rounded-xl flex items-center justify-center group-hover:from-cyber-accent/50 group-hover:to-glow-text/50 transition-all duration-300 icon-glow"
                whileHover={{
                  rotate: [0, -5, 5, -5, 0],
                  scale: 1.1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-cyber-accent group-hover:text-glow-text transition-colors duration-300">
                  {skill.icon}
                </div>
              </motion.div>

              {/* Skill name and category */}
              <h3 className="text-lg font-bold text-glow-text group-hover:text-cyber-accent transition-colors mb-2">
                {skill.name}
              </h3>
              
              <p className="text-sm text-glow-text/60 group-hover:text-glow-text/80 transition-colors mb-3">
                {skill.description}
              </p>

              {/* Skill level indicator */}
              <div className="w-full bg-dark-section/50 rounded-full h-2 mb-2 overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyber-accent to-glow-text rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
              
              <span className="text-xs text-glow-text/50 group-hover:text-glow-text/70 transition-colors">
                {skill.level}% Proficiency
              </span>

              {/* Category badge */}
              <div className="absolute top-3 right-3 px-2 py-1 bg-cyber-accent/20 rounded-full text-xs text-cyber-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.category}
              </div>
            </div>

            {/* Ripple effect on hover */}
            <motion.div 
              className="absolute inset-0 rounded-2xl bg-cyber-accent/10"
              initial={{ scale: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
