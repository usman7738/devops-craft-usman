import { Cloud, Server, Code, GitBranch, Shield, Monitor } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      color: "primary",
      skills: [
        { name: "AWS", level: 90, tools: ["EC2", "S3", "Lambda", "VPC", "RDS", "SNS", "IAM", "CloudWatch", "ECS", "EKS", "ALB", "NLB"] },
        { name: "Azure", level: 85, tools: ["Azure DevOps", "VM", "Storage Accounts", "AKS", "VNET", "Firewall", "Load Balancer", "Application Gateway", "Azure Monitor", "RBAC"] },
        { name: "GCP", level: 80, tools: ["Compute Engine", "Cloud Storage", "Cloud Run", "GKE", "Load Balancer"] }
      ]
    },
    {
      icon: Server,
      title: "DevOps Tools",
      color: "secondary",
      skills: [
        { name: "Container Orchestration", level: 90, tools: ["Docker", "Kubernetes", "Helm", "EKS", "AKS", "GKE", "K3s"] },
        { name: "Infrastructure as Code", level: 88, tools: ["Terraform", "Ansible", "ARM Templates"] },
        { name: "Monitoring & Observability", level: 85, tools: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch", "Azure Monitor"] },
        { name: "Web Servers", level: 80, tools: ["Apache Tomcat", "Nginx"] }
      ]
    },
    {
      icon: GitBranch,
      title: "CI/CD & Version Control",
      color: "accent",
      skills: [
        { name: "CI/CD Platforms", level: 92, tools: ["Jenkins", "GitHub Actions", "Bitbucket Pipelines", "Azure DevOps", "ArgoCD"] },
        { name: "Version Control", level: 95, tools: ["Git", "GitHub", "Bitbucket", "Azure Repos"] },
        { name: "Container Registry", level: 85, tools: ["Docker Registry", "Azure Container Registry", "AWS ECR"] }
      ]
    },
    {
      icon: Code,
      title: "Programming & Scripting",
      color: "primary",
      skills: [
        { name: "Scripting Languages", level: 85, tools: ["Bash", "PowerShell", "Python (Basic)"] },
        { name: "Configuration Languages", level: 90, tools: ["YAML", "HCL", "JSON", "XML"] },
        { name: "Networking & Others", level: 80, tools: ["TCP/IP", "HTTP", "VPN", "DNS", "FTP", "SSH", "ServiceNow"] }
      ]
    },
    {
      icon: Shield,
      title: "Operating Systems",
      color: "secondary",
      skills: [
        { name: "Linux/Unix", level: 90, tools: ["Ubuntu", "RHEL", "CentOS", "Debian"] },
        { name: "Windows", level: 85, tools: ["Windows Server", "PowerShell", "Active Directory"] },
        { name: "Containerized OS", level: 80, tools: ["Alpine Linux", "Ubuntu Core", "CoreOS"] }
      ]
    },
    {
      icon: Monitor,
      title: "Advanced Technologies",
      color: "accent",
      skills: [
        { name: "AI/ML Infrastructure", level: 80, tools: ["Hugging Face", "OpenAI", "Deepseek", "JupyterHub", "NVIDIA GPU Operator"] },
        { name: "ITIL Processes", level: 85, tools: ["Incident Management", "Change Management", "Problem Management", "ServiceNow"] },
        { name: "Enterprise Support", level: 90, tools: ["Major Incident Management", "COB Drills", "Multi-region Support"] }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'accent':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-gradient-primary';
      case 'secondary':
        return 'bg-gradient-secondary';
      case 'accent':
        return 'bg-gradient-accent';
      default:
        return 'bg-gradient-primary';
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-surface/50">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and platforms I use to build, deploy, 
            and maintain scalable cloud infrastructure and DevOps solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass border-card-border hover-lift hover-glow transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(category.color)}`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                      <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    {/* Tools/Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {skill.tools.map((tool, toolIndex) => (
                        <Badge 
                          key={toolIndex} 
                          variant="outline" 
                          className="text-xs px-2 py-1 bg-muted/30 border-muted hover:bg-muted/50 transition-colors"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technology Ecosystem</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Kubernetes", "Docker", "Terraform", "Ansible", "Jenkins", "GitHub Actions",
              "AWS", "Azure", "GCP", "Prometheus", "Grafana", "ELK Stack",
              "Linux", "Python", "Bash", "PowerShell", "YAML", "HCL", "ArgoCD", "Helm", "ServiceNow"
            ].map((tech, index) => (
              <Badge 
                key={index}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground font-medium hover-lift"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;