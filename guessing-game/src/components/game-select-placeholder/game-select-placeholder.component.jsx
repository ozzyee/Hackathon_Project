import React from "react";
import "./game-select-placeholder.style.css";

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
