import { GraduationCap, Briefcase, Car } from "lucide-react";
import UseCaseCard from "./UseCaseCard";

const useCases = [
  {
    icon: GraduationCap,
    title: "Students",
    description: "Share bike or taxi rides with fellow students heading to campus or back home. Perfect for tight budgets.",
    saving: "60%",
    bgClass: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    icon: Briefcase,
    title: "Daily Commuters",
    description: "Connect with colleagues or neighbors going to the same business district. Make commuting social.",
    saving: "50%",
    bgClass: "bg-gradient-to-br from-accent/10 to-accent/5"
  },
  {
    icon: Car,
    title: "Local Drivers",
    description: "Fill your vehicle faster, make more trips per day, and earn more. No more waiting at motor parks.",
    saving: "2x trips",
    bgClass: "bg-gradient-to-br from-success/10 to-success/5"
  }
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Made for <span className="gradient-text">Everyone</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a student, commuter, or driver — A drop helps you save time and money.
          </p>
        </div>
        
        {/* Use case cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} {...useCase} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
