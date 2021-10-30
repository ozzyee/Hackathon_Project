import React from "react";
import "./game-select-placeholder.style.css";

function GameSelectImagePlaceholder({ alt, src, onClick, id }) {
   return (
      <>
         <div className="game-box" onClick={onClick} id={id}>
            <div className="game-image-wrapper">
               <img className="placeholder-image" src={src} alt={alt} />
            </div>
         </div>
      </>
   );
}

export default GameSelectImagePlaceholder;
