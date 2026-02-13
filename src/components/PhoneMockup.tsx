import { MapPin, Clock, Users, ChevronRight, Car } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="relative w-[280px] h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl hero-glow">
        {/* Screen */}
        <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-secondary/50">
            <span className="text-xs font-medium text-muted-foreground">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 bg-success rounded-sm"></div>
            </div>
          </div>
          
          {/* App content */}
          <div className="px-4 py-4 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Good morning!</p>
                <h3 className="text-lg font-bold text-foreground">Find your ride</h3>
              </div>
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                <Users className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            
            {/* Search card */}
            <div className="bg-card rounded-2xl p-4 shadow-lg border border-border">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="text-sm font-medium text-foreground">Campus Gate</p>
                  </div>
                </div>
                <div className="border-l-2 border-dashed border-muted ml-1.5 h-4"></div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">To</p>
                    <p className="text-sm font-medium text-foreground">Circuit</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1 px-3 py-1.5 bg-secondary rounded-full">
                  <Clock className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-secondary-foreground">Now</span>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 bg-secondary rounded-full">
                  <Users className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-secondary-foreground">1 seat</span>
                </div>
              </div>
            </div>
            
            {/* Available matches */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-foreground">Available Matches</h4>
                <span className="text-xs text-primary font-medium">3 found</span>
              </div>
              
              {/* Match cards */}
              <div className="space-y-2">
                {[
                  { name: "Sarah M.", time: "2 min", price: "₦150", avatar: "S", match: "98%" },
                  { name: "James K.", time: "5 min", price: "₦175", avatar: "J", match: "95%" },
                ].map((ride, i) => (
                  <div key={i} className="bg-card rounded-xl p-3 flex items-center gap-3 border border-border hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {ride.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-semibold text-foreground">{ride.name}</p>
                        <span className="text-xs px-1.5 py-0.5 bg-success/20 text-success rounded-full">{ride.match}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{ride.time} away</span>
                        <Car className="w-3 h-3 ml-1" />
                        <span>Bike</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-primary">{ride.price}</p>
                      <p className="text-xs text-muted-foreground">each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom nav */}
          <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border px-6 py-4">
            <div className="flex items-center justify-around">
              <div className="flex flex-col items-center gap-1">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-medium text-primary">Home</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">History</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span className="text-[10px] text-muted-foreground">Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default PhoneMockup;
