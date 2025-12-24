import { Button } from "@/components/ui/button";
import { trackButtonClick, trackExternalLink } from "@/lib/analytics";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card rounded-3xl p-12 shadow-large border border-border/50">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to transform your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                co-living management?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of property managers who have streamlined their operations with CoLivManager. 
              Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => trackButtonClick('Start Free Trial', 'cta')}
              >
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                <a 
                  href="https://calendly.com/singingbirdapps/raj-s-personal-meeting-room" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackExternalLink('https://calendly.com/singingbirdapps/raj-s-personal-meeting-room', 'Schedule Demo')}
                >
                  Schedule Demo
                </a>
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;