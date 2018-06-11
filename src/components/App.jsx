import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Hello from "./Hello";
import Todos from "./Todos";

const App = () => (
  <div>
    <Link to="/todos">todos</Link>
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route path="/todos" component={Todos} />
    </Switch>
  </div>
);

export default App;
