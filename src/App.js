import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Users from "./Components/Users";
import Todos from "./Components/Todos";
import TodoBanner from "./Utils/todo.png";

const App = () => {
  return (
    <>
      <div>
        <img id="todoBanner" src={TodoBanner} alt="todo-banner" />
      </div>
      <Switch>
        <Route path="/:id">
          <Todos />
        </Route>
        <Route path="/">
          <Users />
        </Route>
      </Switch>
    </>
  );
};

export default App;
