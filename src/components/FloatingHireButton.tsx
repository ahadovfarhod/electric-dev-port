import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const FloatingHireButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-8 right-8 z-40 gradient-primary text-white shadow-xl hover:shadow-2xl animate-float rounded-full w-16 h-16 p-0"
      aria-label="Hire Me"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  );
};
