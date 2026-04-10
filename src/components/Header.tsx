import { Menu, Mic, MapPin } from "lucide-react";  // 👈 Added MapPin icon
import { Button } from "@/components/ui/button";

import myLogo from "@/assets/my-logo.png";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <img
              src={myLogo}
              alt="App Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <h1 className="text-xl font-bold text-primary hidden sm:block">
              FASAL GURU
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* 👇 LOCATION BUTTON - Opens in SAME TAB */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => {
              window.location.href = "https://coordinates-app.netlify.app/";
            }}
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></span>
          </Button>

          {/* Mic button (unchanged) */}
          {/* Mic button - Opens in SAME TAB */}
<Button
  variant="ghost"
  size="icon"
  className="relative"
  onClick={() => {
    window.location.href = "https://huggingface.co/spaces/fasalguru/jarvisai";
  }}
>
  <Mic className="h-5 w-5 text-success" />
  <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></span>
</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
