import React, { useEffect } from "react";
import HomePage from "@/pages/HomePage";
import { Toaster } from "@/components/ui/toaster";
import { useDarkMode } from "@/hooks/useDarkMode";
import ChatWidget from "@/components/ui/ChatWidget";

function App() {
  const [isDarkMode] = useDarkMode(); // Initialize dark mode check

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <HomePage />
      <Toaster />
      <ChatWidget />
    </>
  );
}

export default App;
