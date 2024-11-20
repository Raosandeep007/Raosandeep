"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme();

  switch (theme) {
    case "light":
      return <Sun {...props} />;
    case "dark":
      return <Moon {...props} />;
    default:
      return <Laptop {...props} />;
  }
};

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        return setTheme("dark");
      case "dark":
        return setTheme("system");
      default:
        return setTheme("light");
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <Button
        variant="outline"
        className="rounded-full"
        size="icon"
        onClick={toggleTheme}
      >
        <ThemeIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
