import { ArrowDown, Download, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Animated greeting */}
        <div className="fade-in mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </div>
        
        {/* Main title */}
        <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-foreground">Usman</span>
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            Merchant
          </span>
        </h1>
        
        {/* Subtitle with typing animation */}
        <div className="fade-in fade-in-delay-2 mb-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
            DevOps Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            3+ Years Experience • Mumbai, India
          </p>
        </div>
        
        {/* Tagline */}
        <p className="fade-in fade-in-delay-3 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Transforming infrastructure through cloud automation, orchestrating scalable solutions, 
          and building resilient systems that power mission-critical applications.
        </p>
        
        {/* CTA Buttons */}
        <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('experience')}
            className="bg-gradient-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold hover-lift glow-primary"
          >
            View Projects
          </Button>
          
          <Button 
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 text-lg font-semibold hover-lift"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary px-8 py-3 text-lg font-semibold hover-lift"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
        
        {/* Contact info */}
        <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row gap-6 justify-center items-center text-muted-foreground mb-12">
          <a 
            href="mailto:usmanmerchant7738@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            usmanmerchant7738@gmail.com
          </a>
          <a 
            href="tel:+917738956033"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 7738956033
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="fade-in fade-in-delay-3 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-primary hover:text-primary-glow transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;