import React from "react";
import { Button } from "./button";

interface buttonProps {
  id?: string;
}

const ButtonAnimate: React.FC<buttonProps> = ({ id }) => {
  return (
    <div className="relative flex justify-end h-9 w-9">
      <div className="absolute inline-flex rounded-full h-full w-full bg-gradient-to-r from-orange-500 to bg-purple-600 animate-pingScale"></div>
      <Button className="relative inline-flex rounded-full bg-gradient-to-r from-orange-500 to bg-purple-600 h-9 w-9 hover:bg-transparent border-orange-500 border-2"></Button>
    </div>
  );
};

export default ButtonAnimate;
