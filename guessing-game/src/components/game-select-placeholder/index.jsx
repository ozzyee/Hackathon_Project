import React from "react";
import "./style.css";

function GameSelectImagePlaceholder({ alt, src }) {
   return (
      <>
         <div className="game-image-wrapper">
            <img className="placeholder-image" src={src} alt={alt} />
         </div>
      </>
   );
}

export default GameSelectImagePlaceholder;
