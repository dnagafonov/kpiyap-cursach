import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import {Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
          <Switch>
              <Header/>
              <Route exact path="/" component={Body}/>
          </Switch>
      </Router>
  );
}

export default App;
