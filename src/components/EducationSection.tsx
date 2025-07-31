import { GraduationCap, Calendar, MapPin, Award, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EducationSection = () => {
  const education = {
    degree: "Bachelor of Engineering",
    major: "Information Technology",
    college: "M.H. Saboo Siddik College of Engineering",
    university: "University of Mumbai",
    location: "Mumbai, India",
    duration: "2018 - 2022",
    cgpa: "8.26",
    maxCgpa: "10.0",
    percentage: "82.6%"
  };

  const relevantCoursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Software Engineering",
    "Cloud Computing",
    "Distributed Systems",
    "Web Technologies",
    "System Administration",
    "Network Security"
  ];

  const academicAchievements = [
    {
      title: "Dean's List",
      description: "Consistently maintained high academic performance",
      year: "2020-2022"
    },
    {
      title: "Technical Project Excellence",
      description: "Led multiple software development projects",
      year: "2021-2022"
    },
    {
      title: "Industry Readiness",
      description: "Completed internships and practical training",
      year: "2021"
    }
  ];

  const skillsDeveloped = [
    { category: "Programming", skills: ["Java", "Python", "C++", "JavaScript"] },
    { category: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "Web Technologies", skills: ["HTML/CSS", "React", "Node.js"] },
    { category: "System Administration", skills: ["Linux", "Windows Server", "Networking"] }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="bg-gradient-primary bg-clip-text text-transparent">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strong academic foundation in Information Technology providing the theoretical 
            knowledge that complements my practical DevOps expertise.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="mb-12">
          <Card className="glass border-card-border hover-lift hover-glow transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{education.degree}</CardTitle>
                    <h3 className="text-xl text-primary font-semibold">{education.major}</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{education.cgpa}</div>
                    <div className="text-sm text-muted-foreground">CGPA / {education.maxCgpa}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">{education.percentage}</div>
                    <div className="text-sm text-muted-foreground">Percentage</div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Institution Details
                  </h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="font-medium">{education.college}</div>
                    <div>{education.university}</div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {education.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {education.duration}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    Academic Performance
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Overall CGPA</span>
                      <Badge className="bg-gradient-primary text-primary-foreground">{education.cgpa}/10</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${(parseFloat(education.cgpa) / 10) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Consistently maintained high academic standards throughout the program
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Details Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Relevant Coursework */}
          <Card className="glass border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-secondary-foreground" />
                </div>
                Relevant Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {relevantCoursework.map((course, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="justify-start p-2 text-xs bg-muted/30 border-muted hover:bg-secondary/10 hover:border-secondary/30 transition-colors"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Core IT subjects providing strong foundation for DevOps and cloud engineering career.
              </p>
            </CardContent>
          </Card>

          {/* Academic Achievements */}
          <Card className="glass border-card-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent-foreground" />
                </div>
                Academic Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {academicAchievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Developed During Education */}
        <Card className="glass border-card-border">
          <CardHeader>
            <CardTitle className="text-center">Skills Developed During Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsDeveloped.map((skillGroup, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="text-sm text-muted-foreground py-1 px-2 bg-muted/20 rounded"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education to Career Bridge */}
        <div className="mt-12 text-center">
          <Card className="glass border-card-border p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">From Academia to Industry</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My Information Technology education at M.H. Saboo Siddik College of Engineering provided 
              a solid foundation in computer science principles, networking, and system administration. 
              The coursework in cloud computing, distributed systems, and network security directly 
              contributed to my success in the DevOps field.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-gradient-primary text-primary-foreground px-4 py-2">
                Strong Technical Foundation
              </Badge>
              <Badge className="bg-gradient-secondary text-secondary-foreground px-4 py-2">
                Problem-Solving Skills
              </Badge>
              <Badge className="bg-gradient-accent text-accent-foreground px-4 py-2">
                Industry-Ready Knowledge
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;