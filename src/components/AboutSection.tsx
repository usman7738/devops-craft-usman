import { Cloud, Server, Zap, Globe, Shield, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Cloud,
      title: "Multi-Cloud Expertise",
      description: "Proficient in AWS, Azure, and GCP with hands-on experience in designing and managing scalable cloud infrastructure."
    },
    {
      icon: Server,
      title: "Infrastructure Automation",
      description: "Specialized in Infrastructure as Code using Terraform, Ansible, and ARM templates for consistent deployments."
    },
    {
      icon: Zap,
      title: "CI/CD Optimization",
      description: "Expert in building and optimizing CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps."
    },
    {
      icon: Globe,
      title: "Global Scale Operations",
      description: "Experience supporting 500+ enterprise applications globally with 99% uptime for mission-critical systems."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Strong focus on security best practices, RBAC implementation, and compliance in banking environments."
    },
    {
      icon: Cpu,
      title: "Container Orchestration",
      description: "Advanced Kubernetes and Docker expertise for containerized application deployment and management."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate DevOps Engineer with 3+ years of experience architecting and maintaining 
            robust cloud infrastructure for enterprise-scale applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Transforming Infrastructure Through Innovation
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Experienced DevOps Engineer with a strong background in building, deploying, and managing scalable 
                applications and infrastructure across AWS, Azure, and GCP. Proven expertise in automating CI/CD 
                pipelines, orchestrating containers with Kubernetes, and provisioning infrastructure using Terraform 
                and Ansible.
              </p>
              
              <p>
                Skilled in supporting mission-critical systems, including banking applications, with a focus on 
                high availability, security, and performance. At LTIMINDTREE, I managed CITI Bank's infrastructure 
                ensuring 99% uptime across global regions while supporting 500+ enterprise applications.
              </p>
              
              <p>
                Adept at working in agile environments and leveraging tools such as GitHub, Jenkins, Docker, Helm, 
                and ServiceNow to deliver reliable, cost-optimized DevOps solutions. Experienced in AI/ML workflow 
                deployments and building GPU-enabled Kubernetes clusters for advanced computing workloads.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Applications Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">99%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">4</div>
                <div className="text-sm text-muted-foreground">Cloud Certifications</div>
              </div>
            </div>
          </div>

          {/* Tech Philosophy */}
          <div className="glass glow-card rounded-2xl p-8">
            <h4 className="text-xl font-semibold mb-6 text-center">My DevOps Philosophy</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Automation First</h5>
                  <p className="text-sm text-muted-foreground">
                    Every process should be automated, repeatable, and version-controlled.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary text-sm font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Security by Design</h5>
                  <p className="text-sm text-muted-foreground">
                    Security considerations should be integrated from the beginning, not added later.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Continuous Learning</h5>
                  <p className="text-sm text-muted-foreground">
                    The tech landscape evolves rapidly; staying current is essential for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="glass border-card-border hover-lift hover-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;