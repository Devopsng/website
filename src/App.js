import React from 'react';
import logo from './logo.svg';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
    HashRouter,
} from 'react-router-dom';
import './App.css';
import Preloader from './preloader/preloader'
import Index from './landing'
import MeetUp from './meetup'
import Contact from "./contact";
import Community from "./community";
import Register from './register';
import Redirect from './components/redirect'
import Speakers from "./speakers";
import Schedule from "./schedule";

function App() {
  return (
   // {/*<div>*/}
    //{/*  */}
   // {/*  <Index/>*/}
  //  {/*</div>*/}
      <div>
          <Preloader/>
          <Router>
              {/*<Switch>*/}
                  {/*<Route path="/home" exact>*/}
                  {/*    <Redirect to="/" />*/}
                  {/*</Route>*/}
                  <Route exact path="/" component={Index} />
                  <Route path="/meetup" component={MeetUp} />
                  <Route path="/contact" component={Contact}/>
                  <Route path="/community" component={Community}/>
                  <Route path="/speakers" component={Speakers}/>
                  <Route path="/schedule" component={Schedule}/>
                  {/*<Route exact path="/register" component={Register}/>*/}
                  <Route
                      path="/register"
                      render={(props) => <Redirect {...props} location={ "https://www.meetup.com/Devops-Nigeria/events/265747549" } />}
                  />
                  <Route
                      path="/ife"
                      render={(props) => <Redirect {...props} location={ "http://msht.us/devcon-ife" } />}
                  />
              {/*</Switch>*/}
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
