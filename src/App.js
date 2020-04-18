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
import Member from "./member"

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
                  <Route path="/members" component={Member}/>
                  <Route
                      path="/register"
                      render={(props) => <Redirect {...props} location={ "https://www.meetup.com/Devops-Nigeria/events/265747549" } />}
                  />
                  <Route
                      path="/ife"
                      render={(props) => <Redirect {...props} location={ "http://msht.us/devcon-ife" } />}
                  />
              <Route
                  path="/live"
                  render={(props) => <Redirect {...props} location={ "https://www.youtube.com/watch?v=6LY167-7xgw&feature=youtu.be" } />}
              />
              <Route
                  path="/conf"
                  render={(props) => <Redirect {...props} location={ "https://forms.gle/75VQYmX5cAbgbFGC6" } />}
              />
              {/*</Switch>*/}
          </Router>
      </div>
  );
}

export default App;
