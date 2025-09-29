import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">C</span>
        </div>
        <span className="text-xl font-bold text-foreground">CoLivManager</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
          Pricing
        </a>
        <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
          Contact
        </a>
      </div>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Log In</Button>
        <Button variant="cta">Get Started</Button>
      </div>
    </nav>
  );
};

export default Navigation;