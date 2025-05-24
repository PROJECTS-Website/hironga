
import { Github, Mail } from 'lucide-react';

const ContactSection = () => {
  const contacts = [
    {
      name: 'Discord',
      url: 'https://dsc.gg/streliziahub',
      icon: '💬',
      description: 'Join the community'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/streliziasys',
      icon: <Github className="w-8 h-8" />,
      description: 'View my code'
    },
    {
      name: 'Email',
      url: 'mailto:hiro@strelizia.space',
      icon: <Mail className="w-8 h-8" />,
      description: 'Let\'s work together'
    }
  ];

  return (
    <section className="section-container" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-cyber-accent mb-8 glint-effect">
          Hire me for your work.
        </h2>
        <p className="text-xl md:text-2xl text-glow-text/80 mb-16 max-w-3xl mx-auto leading-relaxed">
          Ready to bring your ideas to life? Let's collaborate and build something extraordinary together.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.url}
              target={contact.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="cyber-button p-8 flex flex-col items-center space-y-4 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <div>
                <div className="text-xl font-bold mb-2">{contact.name}</div>
                <div className="text-lg text-soft-glow/90">{contact.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
