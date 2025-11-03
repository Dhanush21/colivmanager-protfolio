const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                CoLivManager
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering property managers with innovative co-living solutions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-large border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CoLivManager is dedicated to transforming the way property managers handle co-living spaces. 
                We provide cutting-edge technology that simplifies operations, enhances tenant experiences, 
                and maximizes efficiency for property managers worldwide.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-large border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in property management technology, we understand the unique 
                challenges of co-living spaces. Our platform is built by property managers, for property 
                managers, ensuring that every feature addresses real-world needs and delivers measurable results.
              </p>
            </div>

            <div className="bg-gradient-card rounded-2xl p-8 shadow-large border border-border/50">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Impact</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trusted by property managers managing over 400 residents, CoLivManager has streamlined 
                operations, reduced administrative overhead, and improved tenant satisfaction across 
                numerous co-living properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
