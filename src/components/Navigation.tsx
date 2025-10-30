import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import colivLogo from "@/assets/coliv-logo.png";
import { Download, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <a href="/" className="text-foreground/80 hover:text-foreground transition-colors">
        Home
      </a>
      <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
        About
      </a>
      <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
        Features
      </a>
      <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">
        Pricing
      </a>
      <a href="/careers" className="text-foreground/80 hover:text-foreground transition-colors">
        Careers
      </a>
      <a href="https://api.whatsapp.com/message/SJQKEVLM6O2JG1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
        Contact
      </a>
    </>
  );

  return (
    <nav className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center space-x-2">
        <img src={colivLogo} alt="CoLiv Manager Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-foreground">CoLivManager</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {navLinks}
        <Button variant="hero" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download Now
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <div className="flex flex-col space-y-6 mt-8">
            {navLinks}
            <Button variant="hero" size="sm" className="gap-2 w-full">
              <Download className="w-4 h-4" />
              Download Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navigation;