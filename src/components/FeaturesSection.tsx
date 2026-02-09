import { Wallet, Clock, Route, Shield, Users, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Wallet,
    title: "Split Fares",
    description: "Automatically divide transport costs between matched riders. Pay only your fair share.",
    highlight: "Save 50%+"
  },
  {
    icon: Clock,
    title: "Zero Wait Time",
    description: "No more waiting at parks for buses to fill up. Get matched and go instantly.",
    highlight: "Instant rides"
  },
  {
    icon: Route,
    title: "Smart Matching",
    description: "Our algorithm finds riders on the same route, at the same time, heading to the same destination.",
    highlight: "AI-powered"
  },
  {
    icon: Shield,
    title: "Verified Users",
    description: "All riders and drivers are verified. Rate your experience after each trip.",
    highlight: "100% safe"
  },
  {
    icon: Users,
    title: "Community First",
    description: "Build connections with fellow commuters. Make your daily travel social and fun.",
    highlight: "10K+ users"
  },
  {
    icon: Zap,
    title: "Driver Benefits",
    description: "Drivers complete more trips daily without waiting for passengers at parks.",
    highlight: "2x more trips"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">A Drop</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make your daily commute cheaper, faster, and more enjoyable.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
