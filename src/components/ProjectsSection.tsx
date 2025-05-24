
import { ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hexra.cloud',
      description: 'Advanced cloud infrastructure platform with cutting-edge performance optimization.',
      url: 'https://hexra.cloud',
      tech: ['Cloud', 'Infrastructure', 'Performance']
    },
    {
      title: 'Strelizia Bot',
      description: 'Intelligent Discord bot with advanced features and seamless user experience.',
      url: 'https://landing.strelizia.space', 
      tech: ['Discord API', 'Node.js', 'Database']
    },
    {
      title: 'VoidNodes VPS',
      description: 'High-performance VPS hosting solutions with enterprise-grade reliability.',
      url: 'https://voidhost.pro',
      tech: ['VPS', 'Hosting', 'DevOps']
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cyber-glow mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-soft-glow/80 max-w-2xl mx-auto">
            A collection of my most impactful work across different platforms and technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glow-card p-6 group cursor-pointer h-full flex flex-col"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open(project.url, '_blank')}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-cyber-glow group-hover:text-soft-glow transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-teal-highlight group-hover:text-cyber-glow transition-colors" />
              </div>
              
              <p className="text-soft-glow/80 mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs bg-dark-teal/50 text-teal-highlight rounded-full border border-teal-highlight/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
