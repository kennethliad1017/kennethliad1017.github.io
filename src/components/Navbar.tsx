"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex md:h-18 items-center px-4 py-3 w-full">
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  );
}
