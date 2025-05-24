
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
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyber-glow mb-6">
            Tech Stack
          </h2>
          <p className="text-lg text-soft-glow/80 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className="glow-card p-6 text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyber-glow/20 to-soft-glow/20 rounded-lg flex items-center justify-center group-hover:from-cyber-glow/40 group-hover:to-soft-glow/40 transition-all">
                <span className="text-xl font-bold text-cyber-glow">{skill.charAt(0)}</span>
              </div>
              <h3 className="font-medium text-soft-glow group-hover:text-cyber-glow transition-colors">
                {skill}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
