"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { RiLightbulbFlashLine, RiLightbulbLine } from "react-icons/ri";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative">
      <button
        className="fixed top-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white dark:border-black border-opacity-40 shadow-2xl rotate-180 rounded-full flex items-center justify-center transition-all dark:bg-gray-950"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <RiLightbulbFlashLine size={20} />
        ) : (
          <RiLightbulbLine size={20} />
        )}
      </button>
      <div className="fixed top-8 right-1 border-b-4 border-grey-300 dark:border-black w-20 h-0 transform rotate-90 rounded-full"></div>
      <div className="fixed top-16 right-6 border-b-4 bg-white dark:bg-black dark:border-black w-10 h-5 transform rounded-t-full"></div>
    </div>
  );
}
