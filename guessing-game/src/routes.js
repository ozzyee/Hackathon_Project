import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Quiz from "./pages/quiz.jsx";
import Qfix from "./pages/quiz.quickfix.jsx";

const Main = () => {
   return (
      <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/quiz/:id" component={Quiz}></Route>
         <Route exact path="/quizFix/:id" component={Qfix}></Route>
      </Switch>
   );
};

export default Main;
