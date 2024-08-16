import React from "react";

function MovingAnimation() {
  return (
    <>
      <span
        style={{}}
        className="flex absolute text-[10rem] font-serif leading-none mt-24 ml-10 italic serif-stroke "
      >
        {" "}
        Embarking on <br></br> a Creative <br /> Journey.
      </span>
      <span
        style={{}}
        className="flex absolute text-[10rem] font-serif leading-none animate-[ping_1s_ease-in_infinite] mt-24 ml-10 italic serif-stroke"
      >
        {" "}
        Embarking on <br></br> a Creative <br /> Journey.
      </span>
      <span
        style={{}}
        className="flex absolute text-[10rem] font-serif leading-none mt-24 ml-10 animate-[ping_1s_ease-in_infinite] italic serif-stroke"
      >
        {" "}
        Embarking on <br></br> a Creative <br /> Journey.
      </span>
    </>
  );
}

export default MovingAnimation;
