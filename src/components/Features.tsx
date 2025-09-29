import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, Wrench, BarChart3, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Automated Rent Collection",
      description: "Streamline payments with automated rent collection, late fee tracking, and integrated payment processing.",
    },
    {
      icon: Users,
      title: "Resident Profiles",
      description: "Comprehensive resident management with profiles, lease tracking, and communication history.",
    },
    {
      icon: Wrench,
      title: "Maintenance Tracking",
      description: "Efficient work order management, vendor coordination, and maintenance scheduling.",
    },
    {
      icon: BarChart3,
      title: "Real-time Insights",
      description: "Powerful analytics and reporting to optimize occupancy, revenue, and operational efficiency.",
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with compliance features for data protection and regulatory requirements.",
    },
    {
      icon: Zap,
      title: "Easy Integration",
      description: "Seamlessly connect with existing property management tools and accounting software.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to manage{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              shared living spaces
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed specifically for co-living and shared accommodation management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-medium transition-all duration-300 group hover:-translate-y-2"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;