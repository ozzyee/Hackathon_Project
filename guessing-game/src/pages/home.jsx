import React, { useEffect, useState } from "react";
import Header from "../components/header/header.component";
import GameSelectImagePlaceholder from "../components/game-select-placeholder/game-select-placeholder.component";
import { allPuzzles } from "../database/all-data";

function Home() {
   const [data, setData] = useState();

   const quizSelect = (ev) => {
      const id = ev.target.offsetParent.id;
      document.location.href = `/quiz/${id}`;
   };

   return (
      <>
         <Header title="Select a Game" />
         <div className="center-items">
            <div className="grid-layout-wrapper">
               <div className="text-placeholder">
                  <p className="description">
                     You like puzzles, films, and puns? Well you have come to
                     the right place! Hack-O-Lantern has hidden film games with
                     visual clues for Spooky or Hacking themed films. See if you
                     can find them all!
                  </p>
               </div>

               {allPuzzles.map((data, key) => {
                  const id = data.id;
                  const image = data.image;
                  console.log(image);
                  return (
                     <GameSelectImagePlaceholder
                        id={id}
                        onClick={quizSelect}
                        src={image}
                        alt="no image"
                     />
                  );
               })}
            </div>
         </div>
      </>
   );
}

export default Home;
