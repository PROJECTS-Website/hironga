
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
      icon: <Github className="w-6 h-6" />,
      description: 'View my code'
    },
    {
      name: 'Email',
      url: 'mailto:hiro@strelizia.space',
      icon: <Mail className="w-6 h-6" />,
      description: 'Let\'s work together'
    }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyber-glow mb-6">
          Hire me for your work.
        </h2>
        <p className="text-lg text-soft-glow/80 mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's collaborate and build something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              href={contact.url}
              target={contact.name === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="glow-button flex flex-col items-center space-y-3 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-2xl">
                {contact.icon}
              </div>
              <div>
                <div className="font-semibold">{contact.name}</div>
                <div className="text-sm text-soft-glow/70">{contact.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
