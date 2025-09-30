import colivLogo from "@/assets/coliv-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={colivLogo} alt="CoLiv Manager Logo" className="w-10 h-10" />
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
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <a href="tel:+917013034822" className="block text-muted-foreground hover:text-foreground transition-colors">
                +91 7013034822
              </a>
              <a href="mailto:raj@singingbirdapps.com" className="block text-muted-foreground hover:text-foreground transition-colors">
                raj@singingbirdapps.com
              </a>
              <a href="https://maps.app.goo.gl/vMNFSTspytYsnGeP9" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground transition-colors">
                View Location
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