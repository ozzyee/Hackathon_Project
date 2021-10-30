import React from "react";
import "./progress-bar.style.css";

function ProgressBar(props) {
   return (
      <>
         <div className="score-wrapper-component">
            <p className="score">
               You have {props.score} / {props.total} Questions correct
            </p>
         </div>
      </>
   );
}

export default ProgressBar;
