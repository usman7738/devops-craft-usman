import { Building, Calendar, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Unico Connect",
      position: "DevOps Engineer",
      duration: "Jan 2025 - Present",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Leading DevOps initiatives for next-generation financial technology solutions.",
      highlights: [
        "Implementing modern DevOps practices for fintech applications",
        "Designing cloud-native architecture patterns",
        "Establishing CI/CD best practices and automation frameworks",
        "Mentoring team members on DevOps tools and methodologies"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins", "Docker", "Python"],
      current: true
    },
    {
      company: "LTIMINDTREE",
      position: "Cloud DevOps Engineer",
      duration: "June 2022 - Jan 2025",
      location: "Mumbai, India",
      type: "Full-time",
      description: "Managed multi-cloud infrastructure for CITI Bank's mission-critical banking systems with 500+ global applications.",
      highlights: [
        "Achieved 99% uptime for CITI Bank's critical banking infrastructure",
        "Administered Linux/Unix and Windows servers across multiple environments",
        "Implemented container orchestration using Kubernetes and Docker",
        "Automated CI/CD pipelines reducing deployment time by 60%",
        "Managed cost optimization initiatives saving 25% in cloud spend",
        "Supported AI/ML workflow deployments and data pipeline automation",
        "Led incident response and troubleshooting for production systems",
        "Implemented monitoring and alerting solutions using Prometheus and Grafana"
      ],
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "Prometheus", "Grafana"],
      current: false
    }
  ];

  const achievements = [
    {
      metric: "99%",
      label: "System Uptime",
      description: "Maintained for banking infrastructure"
    },
    {
      metric: "500+",
      label: "Applications",
      description: "Supported globally"
    },
    {
      metric: "60%",
      label: "Deployment Time",
      description: "Reduction through automation"
    },
    {
      metric: "25%",
      label: "Cost Savings",
      description: "Through optimization"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            3+ years of hands-on experience in DevOps and cloud engineering, 
            delivering scalable solutions for enterprise-grade applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden md:block" />
                
                <Card className="md:ml-16 glass border-card-border hover-lift hover-glow transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                          <Building className="h-6 w-6 text-primary" />
                          {exp.company}
                          {exp.current && (
                            <Badge className="bg-gradient-primary text-primary-foreground">
                              Current
                            </Badge>
                          )}
                        </CardTitle>
                        <h3 className="text-xl font-semibold text-primary mb-2">{exp.position}</h3>
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    
                    {/* Key Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-secondary" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <div key={hIndex} className="flex items-start gap-3">
                            <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Technologies Used */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, tIndex) => (
                          <Badge 
                            key={tIndex}
                            variant="outline"
                            className="bg-muted/30 border-muted hover:bg-primary/10 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Measurable <span className="bg-gradient-secondary bg-clip-text text-transparent">Impact</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass border-card-border text-center hover-lift hover-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {achievement.metric}
                  </div>
                  <div className="font-semibold mb-1">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Growth */}
        <div className="mt-20 text-center">
          <Card className="glass border-card-border p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Professional Growth Journey</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold">Foundation (2022)</h4>
                <p className="text-sm text-muted-foreground">
                  Started with server administration and basic cloud operations, learning the fundamentals of infrastructure management.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-secondary-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold">Expansion (2023-2024)</h4>
                <p className="text-sm text-muted-foreground">
                  Deepened expertise in container orchestration, automation, and multi-cloud environments while supporting critical banking systems.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto md:mx-0">
                  <span className="text-accent-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold">Leadership (2025)</h4>
                <p className="text-sm text-muted-foreground">
                  Transitioned to a leadership role, driving DevOps best practices and mentoring teams in modern cloud-native technologies.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;