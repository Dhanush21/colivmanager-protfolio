import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";

const Careers = () => {
  const scrollToApplication = () => {
    const formSection = document.getElementById('application-form');
    formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const positions = [
    {
      title: "Senior Property Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Hybrid",
      type: "Full-time"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Hybrid",
      type: "Full-time"
    }
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: "Flexible Work",
      description: "Work remotely or in our modern offices"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented professionals"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Continuous learning and career development"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health and wellness coverage"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Help us revolutionize co-living management and make a difference in people's lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <benefit.icon className="w-10 h-10 mx-auto mb-2 text-primary" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground mb-6">Open Positions</h2>
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <CardDescription>
                        {position.department} • {position.location} • {position.type}
                      </CardDescription>
                    </div>
                    <Button variant="default" onClick={scrollToApplication}>Apply Now</Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

        </div>
      </section>

      <section id="application-form" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Submit Your Application</h2>
            <p className="text-muted-foreground">
              Interested in joining our team? Fill out the form below and we'll be in touch.
            </p>
          </div>
          
          <ApplicationForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;