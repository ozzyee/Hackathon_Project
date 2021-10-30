/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import Header from "../components/header/header.component";
import GameMainImage from "../components/game-image/game-image.component";
import Score from "../components/progress-bar/progress-bar.component";
import { allPuzzles } from "../database/all-data";

import GreatJob from "../images/Great Job.jpeg";

function Quiz() {
   const [data, setData] = useState();
   const url = window.location.href;
   const urlSplit = url.split("/");
   const id = urlSplit[4];
   const currentData = allPuzzles.filter(function (item) {
      return item.id === id;
   });
   const quizData = currentData[0];

   //    STATE
   const [arrNum, setArrNum] = useState(0);
   const [inputValue, setInputValue] = useState("");
   const [correctAnswer, setCorrectAnswer] = useState([""]);
   const [redBorder, setRedBorder] = useState(false);

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
      setRedBorder(false);

      if (arrNum >= length) {
         setArrNum(0);
      }
   };

   const prevQuestion = () => {
      const arrayLength = questionsFilter.length;

      setArrNum(arrNum - 1);
      setRedBorder(false);

      if (arrNum <= 0) {
         setArrNum(arrayLength - 1);
      }
   };

   const checkAnswer = () => {
      document.getElementById("input").value = "";
      if (inputValue === answers[arrNum]) {
         setCorrectAnswer([...correctAnswer, inputValue]);
         setArrNum(0);
         setRedBorder(false);
      } else {
         setRedBorder(true);
      }
   };

   const getMousePositionOnClick = (ev) => {
      const id = ev.target.id;
      const idSplit = id.split("-");

      if (id !== "") {
         if (idSplit.length >= 1) {
            const question = idSplit.join(" ");

            const currentDataOnClick = questionsFilter.filter(function (item) {
               return item.answer === question;
            });

            const filter = answers.filter(function (item) {
               return item === question;
            });

            console.log(question);

            if (filter.length == 0) {
               window.alert("This One Has been Complete");
            }

            try {
               const arrayNumber = currentDataOnClick[0].id - 1;

               console.log(arrayNumber);
               setArrNum(arrayNumber);
            } catch (e) {
               console.log("this is the error", e);
            }
         }
      }
   };

   return (
      <div>
         <Header title={quizData.title} />
         <h2>Find the film titles in the picture:</h2>
         <div className="center-quiz">
            <div className="main-image-wrapper">
               <GameMainImage
                  onClick={getMousePositionOnClick}
                  scr={quizData.image}
                  id={id}
               />
            </div>

            <div className="control-wrapper">
               <div className="selected-image-wrapper">
                  {questionsFilter.length > 0 && (
                     <div className="image-wrapper">
                        <img
                           className="selected-image"
                           src={questionsFilter[arrNum].image}
                           alt="no-image"
                        />
                     </div>
                  )}

                  {questionsFilter.length < 1 && (
                     <div className="image-wrapper">
                        {" "}
                        <img
                           className="selected-image"
                           src={GreatJob}
                           alt="no-image"
                        />
                     </div>
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
                        className={`answer-input ${
                           redBorder ? "red-border" : ""
                        }`}
                        id="input"
                        type="text"
                        placeholder="Enter a Answer"
                        onChange={(ev) => setInputValue(ev.target.value)}
                        autoComplete="off"
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
