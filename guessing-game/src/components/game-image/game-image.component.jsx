import React from "react";
import "./game-image.style.css";

function GameMainImage({ scr, alt }) {
   return (
      <>
         <div className="game-image">
            <img src={scr} alt={alt} className="game-main-image"/>
         </div>
      </>
   );
}

export default GameMainImage;
