
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hexra.cloud',
      description: 'Advanced cloud infrastructure platform with cutting-edge performance optimization and enterprise-grade reliability.',
      url: 'https://hexra.cloud',
      tech: ['Cloud Infrastructure', 'Performance', 'Enterprise']
    },
    {
      title: 'Strelizia Bot',
      description: 'Intelligent Discord bot with advanced features, seamless user experience, and powerful automation capabilities.',
      url: 'https://landing.strelizia.space', 
      tech: ['Discord API', 'Node.js', 'Automation']
    },
    {
      title: 'VoidNodes VPS',
      description: 'High-performance VPS hosting solutions with enterprise-grade reliability and lightning-fast deployment.',
      url: 'https://voidhost.pro',
      tech: ['VPS Hosting', 'DevOps', 'Infrastructure']
    }
  ];

  return (
    <section className="section-container" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-cyber-accent mb-8 glint-effect">
          Featured Projects
        </h2>
        <p className="text-xl md:text-2xl text-glow-text/80 max-w-3xl mx-auto leading-relaxed">
          A collection of my most impactful work across different platforms and technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title}
            className="premium-card p-8 group cursor-pointer h-full flex flex-col"
            style={{ animationDelay: `${index * 0.2}s` }}
            onClick={() => window.open(project.url, '_blank')}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold text-cyber-accent group-hover:text-soft-glow transition-colors glint-effect">
                {project.title}
              </h3>
              <ExternalLink className="w-6 h-6 text-glow-text group-hover:text-cyber-accent transition-colors" />
            </div>
            
            <p className="text-glow-text/80 mb-8 flex-grow text-lg leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 text-sm bg-dark-section/60 text-cyber-accent rounded-lg border border-cyber-accent/40 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
