import React from "react";

interface MovProps {
  className?: string;
}

const MovingAnimation: React.FC<MovProps> = ({ className }) => {
  return (
    <>
      <div className="overflow-hidden">
        <span
          style={{}}
          className="flex absolute text-[10rem] font-serif leading-none mt-24 ml-16 italic serif-stroke "
        >
          {" "}
          Embarking on <br></br> a Creative <br /> Journey.
        </span>
        <span
          style={{}}
          className="flex absolute text-[10rem] font-serif leading-none animate-ping mt-24 ml-16 italic serif-stroke"
        >
          {" "}
          Embarking on <br></br> a Creative <br /> Journey.
        </span>
        <span
          style={{}}
          className="flex absolute text-[10rem] font-serif leading-none mt-24 ml-16 animate-ping italic serif-stroke"
        >
          {" "}
          Embarking on <br></br> a Creative <br /> Journey.
        </span>
      </div>
    </>
  );
};

export default MovingAnimation;
