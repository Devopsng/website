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
import Index from './landing'
import MeetUp from './meetup'

function App() {
  return (
   // {/*<div>*/}
    //{/*  */}
   // {/*  <Index/>*/}
  //  {/*</div>*/}
      <div>
          <Preloader/>
          <Router>
              <Switch>
                  {/*<Route path="/" exact>*/}
                  {/*    <Redirect to="/dashboard" />*/}
                  {/*</Route>*/}
                  <Route exact path="/meetup" component={MeetUp} />
                  <Route exact path="/" component={Index} />
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
