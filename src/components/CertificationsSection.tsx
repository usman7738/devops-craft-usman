import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals",
      code: "AZ-900",
      provider: "Microsoft",
      date: "2023",
      status: "Active",
      level: "Fundamentals",
      description: "Demonstrates foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Azure Services", "Cloud Concepts", "Azure Pricing", "Security & Compliance"],
      color: "primary",
      verified: true
    },
    {
      title: "GCP Professional Cloud Architect",
      code: "PCA",
      provider: "Google Cloud",
      date: "2023",
      status: "Active",
      level: "Professional",
      description: "Validates ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions to drive business objectives.",
      skills: ["GCP Architecture", "Solution Design", "Security", "Cost Optimization"],
      color: "secondary",
      verified: true
    },
    {
      title: "AWS Certified Cloud Practitioner",
      code: "CLF-C02",
      provider: "Amazon Web Services",
      date: "2024",
      status: "Active",
      level: "Foundational",
      description: "Validates overall understanding of the AWS Cloud, independent of specific technical roles addressed by other AWS Certifications.",
      skills: ["AWS Services", "Cloud Economics", "Security", "Cloud Architecture"],
      color: "accent",
      verified: true
    },
    {
      title: "Azure Administrator Associate",
      code: "AZ-104",
      provider: "Microsoft",
      date: "2024",
      status: "Active",
      level: "Associate",
      description: "Validates skills and knowledge to implement, manage, and monitor identity, governance, storage, compute, and virtual networks in a cloud environment.",
      skills: ["Azure Administration", "Virtual Networks", "Storage Management", "Identity Management"],
      color: "primary",
      verified: true
    }
  ];

  const upcomingCertifications = [
    "AWS Solutions Architect Associate",
    "Certified Kubernetes Administrator (CKA)",
    "HashiCorp Terraform Associate",
    "Azure DevOps Engineer Expert"
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/20',
          text: 'text-primary',
          badge: 'bg-primary text-primary-foreground'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary/20',
          text: 'text-secondary',
          badge: 'bg-secondary text-secondary-foreground'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          border: 'border-accent/20',
          text: 'text-accent',
          badge: 'bg-accent text-accent-foreground'
        };
      default:
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/20',
          text: 'text-primary',
          badge: 'bg-primary text-primary-foreground'
        };
    }
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case 'Professional':
        return '🏆';
      case 'Associate':
        return '🥈';
      case 'Foundational':
      case 'Fundamentals':
        return '🥉';
      default:
        return '📜';
    }
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-surface/50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span> & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Industry-recognized certifications validating expertise in cloud platforms, 
            DevOps practices, and enterprise-grade infrastructure management.
          </p>
        </div>

        {/* Current Certifications */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const colors = getColorClasses(cert.color);
            return (
              <Card key={index} className="glass border-card-border hover-lift hover-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${colors.bg} ${colors.border} border rounded-lg flex items-center justify-center`}>
                        <Award className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {cert.code}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{cert.provider}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="text-2xl">{getLevelIcon(cert.level)}</div>
                      {cert.verified && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-secondary" />
                          <span className="text-xs text-secondary">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge className={colors.badge}>
                      {cert.level}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {cert.date} • {cert.status}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Key Skills Covered</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="outline"
                          className="text-xs bg-muted/30 border-muted hover:bg-muted/50"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 hover:bg-primary/10 hover:border-primary/30"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Credential
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certification Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="glass border-card-border text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm text-muted-foreground">Active Certifications</div>
            </CardContent>
          </Card>
          
          <Card className="glass border-card-border text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-secondary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Cloud Platforms</div>
            </CardContent>
          </Card>
          
          <Card className="glass border-card-border text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-accent mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Certification</div>
            </CardContent>
          </Card>
          
          <Card className="glass border-card-border text-center hover-lift">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Verified Credentials</div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Journey */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Certifications */}
          <Card className="glass border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">📚</span>
                </div>
                Upcoming Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingCertifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Continuously expanding knowledge in emerging cloud technologies and DevOps practices.
              </p>
            </CardContent>
          </Card>

          {/* Certification Philosophy */}
          <Card className="glass border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <span className="text-secondary-foreground text-sm">🎯</span>
                </div>
                Certification Strategy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Multi-Cloud Expertise</h4>
                    <p className="text-xs text-muted-foreground">Gaining proficiency across AWS, Azure, and GCP platforms</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Progressive Learning</h4>
                    <p className="text-xs text-muted-foreground">Building from foundational to professional-level certifications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold text-sm">Practical Application</h4>
                    <p className="text-xs text-muted-foreground">Applying certified knowledge to real-world projects</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;