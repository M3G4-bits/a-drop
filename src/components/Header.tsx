import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import adropLogo from "@/assets/adrop-logo.jpg";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Moon, Sun, LogOut } from "lucide-react";

const Header = () => {
  const { isDark, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={adropLogo} alt="A Drop logo" className="h-14" />
          </Link>
          
          {/* Navigation */}
          {!user && (
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                How it Works
              </a>
              <a href="#use-cases" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Use Cases
              </a>
            </nav>
          )}
          
          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full w-10 h-10 p-0"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {user ? (
              <>
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={handleSignOut}
                  className="gap-2"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
                  <Link to="/sign-in">Sign In</Link>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/get-started">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
