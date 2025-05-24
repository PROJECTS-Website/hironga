
const AboutSection = () => {
  const skills = [
    'Minecraft Plugin Dev',
    'Discord Server Architect', 
    'Front-end Dev Wizard'
  ];

  return (
    <section className="section-container" id="about">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Avatar/Logo side */}
        <div className="flex justify-center lg:justify-start">
          <div className="premium-card p-8 max-w-md w-full">
            <div className="w-36 h-36 mx-auto bg-gradient-to-br from-cyber-accent via-glow-text to-soft-glow rounded-full flex items-center justify-center mb-8 animate-pulse-glow">
              <span className="text-5xl font-bold text-void">H</span>
            </div>
            <h3 className="text-2xl font-bold text-center text-cyber-accent mb-4 glint-effect">
              Creative Full-Stack Dev
            </h3>
            <p className="text-glow-text/80 text-center leading-relaxed">
              Who loves building performance-first, aesthetic-rich systems that push boundaries.
            </p>
          </div>
        </div>

        {/* Content side */}
        <div className="space-y-8">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-cyber-accent mb-8 glint-effect">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-glow-text/90 leading-relaxed mb-10">
              I'm passionate about creating digital experiences that blend cutting-edge technology 
              with beautiful design. From architecting Discord communities to crafting Minecraft 
              plugins and building responsive web applications, I deliver solutions that perform.
            </p>
          </div>

          {/* Skill tags */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-cyber-accent">Specializations</h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="premium-card px-6 py-3 text-lg font-semibold text-cyber-accent glint-effect"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
