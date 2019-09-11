import React from 'react';
import logo from './logo.svg';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import './App.css';
import Preloader from './preloader/preloader'
import Landing from './landing/landing'
import MeetUp from './meetup/meetup'

function App() {
  return (
   // {/*<div>*/}
    //{/*  */}
   // {/*  <Landing/>*/}
  //  {/*</div>*/}
      <div>
          <Preloader/>
          <Router>
              <Switch>
                  {/*<Route path="/" exact>*/}
                  {/*    <Redirect to="/dashboard" />*/}
                  {/*</Route>*/}
                  <Route exact path="/meetup" component={MeetUp} />
                  <Route path="/" component={Landing} />
              </Switch>
          </Router>
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
