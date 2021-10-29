import React from "react";
import Header from "../components/Header/index";
import GameSelectImagePlaceholder from "../components/game-select-placeholder/index";

function Home() {
   return (
      <>



         <Header title="Select a Quiz!" />
         <GameSelectImagePlaceholder
            alt="no image"
            src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"
         />
      </>
   );
}

export default Home;
