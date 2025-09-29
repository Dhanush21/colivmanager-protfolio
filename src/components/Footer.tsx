const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">CoLivManager</span>
            </div>
            <p className="text-muted-foreground">
              Modern platform for streamlined shared living management.
            </p>
          </div>
          
          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="#demo" className="block text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#careers" className="block text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </a>
            </div>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <a href="#help" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
              <a href="#privacy" className="block text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="block text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CoLivManager. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;