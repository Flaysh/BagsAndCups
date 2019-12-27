import React, { Component } from 'react';

import './App.css'
import NavbarApp from './Components/Navbar/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Bags from './Components/BagList/BagList';
import Cups from './Components/Cups/Cups';
import Home from './Components/Home/Home';
import axios from 'axios';



class App extends Component {
  // state={
  //   bags:[],
  //   cups:[],
  // }
  // componentDidMount = () => {
  //   axios.get('https://api.myjson.com/bins/qn16s')
  //   .then(res => {
  //      this.setState({bags : res.data.bags , cups : res.data.cups})
  //     //  console.log(this.state);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });
  // }


  render() {
    return (
      <div className="App">
         <Router>
      <div>
        <NavbarApp/>
        <Switch>
          <Route path="/Bags">
            <Bags />
          </Route>
          <Route path="/cups">
            <Cups/>
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
