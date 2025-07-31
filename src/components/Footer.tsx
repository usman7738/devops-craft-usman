import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/usman-merchant',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/usman-merchant',
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:usmanmerchant7738@gmail.com',
      color: 'hover:text-secondary'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-card-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Usman Merchant
              </h3>
              <p className="text-primary font-semibold">DevOps Engineer</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate DevOps Engineer with 3+ years of experience in cloud infrastructure, 
              automation, and delivering scalable solutions for enterprise applications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:usmanmerchant7738@gmail.com" className="hover:text-primary transition-colors">
                  usmanmerchant7738@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+917738956033" className="hover:text-primary transition-colors">
                  +91 7738956033
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Cloud Migration</li>
              <li>DevOps Consulting</li>
              <li>Infrastructure Automation</li>
              <li>CI/CD Implementation</li>
              <li>Container Orchestration</li>
              <li>Monitoring & Observability</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-card-border">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <span className="text-sm text-muted-foreground">Follow me:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground ${social.color} transition-colors`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
          >
            Back to Top ↑
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-card-border mt-8">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Usman Merchant. Built with 
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;