/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Header from "../components/header/header.component";
import GameMainImage from "../components/game-image/game-image.component";
import Score from "../components/progress-bar/progress-bar.component";
import { data } from "../fake-data/data";

function Quiz() {
   const url = window.location.href;
   const urlSplit = url.split("/");
   const id = urlSplit[4];
   const currentData = data.filter(function (item) {
      return item.id === id;
   });
   const quizData = currentData[0];

   //    STATE
   const [arrNum, setArrNum] = useState(0);
   const [inputValue, setInputValue] = useState("");
   const [correctAnswer, setCorrectAnswer] = useState([""]);

   let answers = [];

   const questionsFilter = quizData.images.filter(
      (itemX) => !correctAnswer.includes(itemX.answer)
   );

   for (let i = 0; i < questionsFilter.length; i++) {
      const answer = questionsFilter[i].answer;
      answers.push(answer);
   }

   const nextQuestion = () => {
      setArrNum(arrNum + 1);
      const arrayLength = questionsFilter.length;
      const length = arrayLength - 1;

      console.log(arrayLength);

      if (arrNum >= length) {
         setArrNum(0);
      }
   };

   const prevQuestion = () => {
      const arrayLength = questionsFilter.length;

      setArrNum(arrNum - 1);

      if (arrNum <= 0) {
         setArrNum(arrayLength - 1);
      }
   };

   const checkAnswer = () => {
      if (inputValue === answers[arrNum]) {
         setCorrectAnswer([...correctAnswer, inputValue]);
      }
   };

   console.log("this is the answer", correctAnswer.length - 1);

   return (
      <div>
         <Header title="this is a quiz" />
         <div className="center-quiz">
            <div className="main-image-wrapper">
               <GameMainImage scr={quizData.image} />
            </div>

            <div className="control-wrapper">
               <div className="selected-image-wrapper">
                  {questionsFilter.length > 0 && (
                     <img
                        className="selected-image"
                        src={questionsFilter[arrNum].image}
                        alt="no-image"
                     />
                  )}
               </div>

               <div className="score-answer-wrapper">
                  <div className="score-wrapper">
                     <Score
                        score={correctAnswer.length - 1}
                        total={currentData[0].images.length}
                     />
                  </div>

                  <div className="input-wrapper">
                     <input
                        className="answer-input"
                        id="input"
                        type="text"
                        placeholder="Enter a Answer"
                        onChange={(ev) => setInputValue(ev.target.value)}
                     />
                     <div className="submit-wrapper">
                        <button className="submit" onClick={checkAnswer}>
                           Guess
                        </button>
                     </div>
                  </div>
               </div>

               <div className="buttons-wrapper">
                  <button
                     className="question-select-btn"
                     onClick={prevQuestion}
                  >
                     Previous
                  </button>
                  <button
                     className="question-select-btn"
                     onClick={nextQuestion}
                  >
                     Next
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Quiz;
