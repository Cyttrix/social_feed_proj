import React from "react";
import "./CustomButton.css";
import { useState } from "react";
import { ReactComponent as HeartIcon } from "../../assets/pumpkin-svgrepo-com.svg";
import { ReactComponent as GhostIcon } from "../../assets/halloween-ghost-with-raised-arms-and-tongue-out-svgrepo-com.svg"
const CustomButton = () => {
  const [ghostIconClass, setGhostIconClass] = useState("white");
  const [pumpkinIconColor, setHeartIconColor] = useState("white");

  const handleGhostIconClick = () => {
    if (ghostIconClass === "inactive") {
      setGhostIconClass("white");
    } else {
      setGhostIconClass("red");
    }
  };

  const handleHeartIconClick = () => {
    if (pumpkinIconColor === "white") {
      setHeartIconColor("orange");
    } else {
      setHeartIconColor("white");
    }
  };

  return (
    <div>
      <button>
       <GhostIcon
        height={25}
        width={25}
        fill={ghostIconClass}
        onClick={handleGhostIconClick}
       />
      </button>
      <HeartIcon
        height={25}
        width={25}
        fill={pumpkinIconColor}
        onClick={handleHeartIconClick}
      />
    </div>
  );
};

export default CustomButton;
