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

            {id === "ParkLife" && (
               <div className="imageWrapper-on-click" onClick={onClick}>
                  <div id="Get-Out" />
                  <div id="The-Net" />
                  <div id="The-Nightmare-Before-Christmas" />
                  <div id="Tron" />
                  <div id="Evil-Dead-II" />
                  <div id="Beetlejuice" />
                  <div id="The-Silence-of-the-Lambs" />
                  <div id="The-Fifth-Estate" />
                  <div id="Silk-Road" />
                  <div id="The-Girl-with-the-Dragon-Tattoo" />
                  <div id="It" />
                  <div id="Firewall" />
               </div>
            )}
            <img src={scr} alt={alt} className="game-main-image" />
         </div>
      </>
   );
}

export default GameMainImage;
