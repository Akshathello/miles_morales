"use client";

import React from "react";
import LandingPage from "@/Components/ui/LandingPage";
import Marquee from "@/Components/ui/Marquee";
import WebStudioElement from "@/Components/ui/WebStudioElement";

export default function Home() {
  return (
    <div>
      <LandingPage></LandingPage>
      <Marquee></Marquee>
      <WebStudioElement></WebStudioElement>
    </div>
  );
}
