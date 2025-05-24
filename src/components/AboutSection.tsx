
const AboutSection = () => {
  const skills = [
    'Minecraft Plugin Dev',
    'Discord Server Architect', 
    'Front-end Dev Wizard'
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Logo side */}
          <div className="flex justify-center">
            <div className="glow-card p-8 max-w-sm">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyber-glow to-soft-glow rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-void">H</span>
              </div>
              <h3 className="text-2xl font-semibold text-center text-cyber-glow mb-4">
                Creative Full-Stack Dev
              </h3>
              <p className="text-soft-glow/80 text-center">
                Who loves building performance-first, aesthetic-rich systems.
              </p>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-cyber-glow mb-6">
                About Me
              </h2>
              <p className="text-lg text-soft-glow/90 leading-relaxed mb-8">
                I'm passionate about creating digital experiences that blend cutting-edge technology 
                with beautiful design. From architecting Discord communities to crafting Minecraft 
                plugins and building responsive web applications.
              </p>
            </div>

            {/* Skill tags */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyber-glow">Specializations</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill}
                    className="glow-card px-4 py-2 text-sm font-medium text-cyber-glow animate-glow-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
