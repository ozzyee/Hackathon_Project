import React from "react";
import Header from "../components/header/header.component";
import GameSelectImagePlaceholder from "../components/game-select-placeholder/game-select-placeholder.component";
import { data } from "../fake-data/data";

function Home() {
   const quizSelect = (ev) => {
      const id = ev.target.offsetParent.id;
      document.location.href = `/quiz/${id}`;
   };

   return (
      <>
         <Header title="Select a Game" />
         <div className="center-items">
            <div className="grid-layout-wrapper">
               {data.map((data, key) => {
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
