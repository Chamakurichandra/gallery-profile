import React from "react";
import "./App.css";
import Team from "./pages/Team";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
export default class App extends React.Component{
  render(){
    return(
      <div>
      <Router>
        <Switch>
          <Route exact path="/">
          <Team/>
          </Route>
          <Route  path="/Team">
          <Team/>
          </Route>
        </Switch>
        </Router>
        </div>    
    )
  }
} 