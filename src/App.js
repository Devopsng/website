import React from 'react';
import logo from './logo.svg';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    HashRouter,
    Redirect
} from 'react-router-dom';
import './App.css';
import Preloader from './preloader/preloader'
import Index from './landing'
import MeetUp from './meetup'
import Contact from "./contact";
import Community from "./community";

function App() {
  return (
   // {/*<div>*/}
    //{/*  */}
   // {/*  <Index/>*/}
  //  {/*</div>*/}
      <div>
          <Preloader/>
          <HashRouter>
              <Switch>
                  {/*<Route path="/home" exact>*/}
                  {/*    <Redirect to="/" />*/}
                  {/*</Route>*/}
                  <Route exact path="/" component={Index} />
                  <Route exact path="/meetup" component={MeetUp} />
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/community" component={Community}/>
              </Switch>
          </HashRouter>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
