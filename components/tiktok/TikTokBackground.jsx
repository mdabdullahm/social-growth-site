"use client";
import Lottie from "lottie-react";
import partyAnimation from "@/public/titockheroanimation.json";

const TikTokBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-50 flex justify-center items-center">
      <Lottie 
        animationData={partyAnimation} 
        loop={true} 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default TikTokBackground;