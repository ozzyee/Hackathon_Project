import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Quiz from "./pages/quiz.jsx";

const Main = () => {
   return (
      <Switch>
         <Route exact path="/" component={Home}></Route>
         <Route exact path="/quiz/:id" component={Quiz}></Route>
      </Switch>
   );
};

export default Main;
