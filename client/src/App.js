import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Wrtiepage from "./components/Wrtiepage";
import BoardDetailPage from "./components/BoardDetailPage";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/write" component={Wrtiepage} />
        <Route path="/page/:id" component={BoardDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
