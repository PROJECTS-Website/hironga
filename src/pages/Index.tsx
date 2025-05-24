
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
import AdvancedFooter from '../components/AdvancedFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-void font-geist">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </div>
      <AdvancedFooter />
    </div>
  );
};

export default Index;
