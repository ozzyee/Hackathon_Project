import React from "react";
import "./game-image.style.css";

function GameMainImage({ scr, alt, onClick, id }) {
   return (
      <>
         <div className="game-image">
            {id === "OdditiesAndEvenDataID" && (
               <div className="imageWrapper-on-click" onClick={onClick}>
                  <div id="Goldeneye" />
                  <div id="Blackhat" />
                  <div id="Coraline" />
                  <div id="WarGames" />
                  <div id="Halloween" />
                  <div id="The-Shining" />
                  <div id="Swordfish" />
                  <div id="The-Matrix" />
                  <div id="Ghost-in-The-Shell" />
                  <div id="Hackers" />
                  <div id="Sneakers" />
                  <div id="The-Ring" />
               </div>
            )}
            <img src={scr} alt={alt} className="game-main-image" />
         </div>
      </>
   );
}

export default GameMainImage;
