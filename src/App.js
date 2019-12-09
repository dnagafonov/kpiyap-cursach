import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Information from "./components/body/information/information";

const App = () => {
  return (
      <Router>
          <Header/>
          <Switch>
              <Body>
                  <Route exact path="/" render={() => <div>main</div>}/>
                  <Route path="/services" render={() => <p>services</p>}/>
                  <Route path="/information" component={Information}/>
                  <Route path="/account" render={() => <p>account</p>}/>
              </Body>
          </Switch>
      </Router>
  );
};

export default App;
