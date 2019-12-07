import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={Body}/>
              <Route path="/services" render={() => <p>services</p>}/>
              <Route path="/information" render={() => <p>information</p>}/>
              <Route path="/account" render={() => <p>account</p>}/>
          </Switch>
      </Router>
  );
}

export default App;
