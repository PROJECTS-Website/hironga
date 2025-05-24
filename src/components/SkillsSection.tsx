
const SkillsSection = () => {
  const skills = [
    'Cloudflare',
    'NGINX',
    'Vite',
    'TypeScript',
    'React',
    'shadcn/ui',
    'Tailwind CSS',
    'Java'
  ];

  return (
    <section className="section-container" id="skills">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-cyber-accent mb-8 glint-effect">
          Tech Stack
        </h2>
        <p className="text-xl md:text-2xl text-glow-text/80 max-w-3xl mx-auto leading-relaxed">
          Technologies and tools I use to bring ideas to life with precision and performance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={skill}
            className="premium-card p-8 text-center group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-cyber-accent/30 to-glow-text/30 rounded-xl flex items-center justify-center group-hover:from-cyber-accent/50 group-hover:to-glow-text/50 transition-all duration-300 animate-pulse-glow">
              <span className="text-2xl font-bold text-cyber-accent">{skill.charAt(0)}</span>
            </div>
            <h3 className="text-lg font-bold text-glow-text group-hover:text-cyber-accent transition-colors">
              {skill}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
