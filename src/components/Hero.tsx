import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-hero rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                CoLivManager is a modern platform built to{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  streamline shared living spaces
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                From automated rent collection to resident profiles, maintenance tracking, and real-time insights - 
                manage your co-living properties with ease and efficiency.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10k+</div>
                <div className="text-sm text-muted-foreground">Residents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-large">
              <img 
                src={heroImage} 
                alt="CoLivManager Dashboard Preview" 
                className="w-full h-auto rounded-xl shadow-medium"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-soft">
              <div className="text-sm font-medium text-foreground">Real-time Analytics</div>
              <div className="text-xs text-muted-foreground">Updated live</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg p-4 shadow-soft">
              <div className="text-sm font-medium text-foreground">Automated Collection</div>
              <div className="text-xs text-accent">+15% efficiency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;