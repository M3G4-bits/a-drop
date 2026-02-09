import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-secondary-foreground">Smart Ride Matching</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Share Rides,
              <span className="block gradient-text">Save Together</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Connect with people heading your way. Split fares, skip the wait, and make every journey more affordable and efficient with A drop.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div>
                <p className="text-3xl font-bold text-foreground">50%</p>
                <p className="text-sm text-muted-foreground">Average Savings</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">0 min</p>
                <p className="text-sm text-muted-foreground">Park Wait Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2x</p>
                <p className="text-sm text-muted-foreground">More Driver Trips</p>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Start Sharing
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right content - Phone mockup */}
          <div className="flex justify-center lg:justify-end float-animation">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
