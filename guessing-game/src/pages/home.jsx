import React from "react";
import Header from "../components/header/header.component";
import GameSelectImagePlaceholder from "../components/game-select-placeholder/game-select-placeholder.component";

function Home() {
   return (
      <>
         <Header title="Select a Game" />
         <div className="grid-layout-wrapper">
            <GameSelectImagePlaceholder />
         </div>
      </>
   );
}

export default Home;
