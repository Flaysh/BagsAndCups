import React, { Component } from 'react';

import './App.css'
import NavbarApp from './Components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BagList from './Components/BagList/BagList';
import CupList from './Components/CupList/CupList';
import Home from './Components/Home/Home';



class App extends Component {

  render() {
    return (
      <div className="App">
         <Router>
      <div>
        <NavbarApp/>
        <Switch>
          <Route path="/Bags">
            <BagList />
          </Route>
          <Route path="/cups">
            <CupList/>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    )
  }
}

export default App;
