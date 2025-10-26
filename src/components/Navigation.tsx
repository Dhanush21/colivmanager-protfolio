import { Button } from "@/components/ui/button";
import colivLogo from "@/assets/coliv-logo.png";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <img src={colivLogo} alt="CoLiv Manager Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-foreground">CoLivManager</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
          Home
        </Link>
        <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
          About
        </a>
        <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
          Pricing
        </a>
        <Link to="/careers" className="text-foreground/80 hover:text-foreground transition-colors">
          Careers
        </Link>
        <a href="https://api.whatsapp.com/message/SJQKEVLM6O2JG1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
          Contact
        </a>
        <Button variant="hero" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download Now
        </Button>
      </div>
      
    </nav>
  );
};

export default Navigation;