import React from 'react';
import { Switch, Route } from 'react-router-dom'

// reusable components --presentational
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//  page components
import Home from './pages/Home/Home';
import Playdates from './pages/Playdates/Playdates';
import Login from './pages/Login/Login';

import './App.css';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App-outer-container">
      <Navbar />
      <div className="App-inner-container">
        <Switch>
          <Route exact path="/" render={props =>
            <Home />
          }/>
          <Route exact path="/playdates" render={props =>
            <Playdates />
          }/>
          <Route exact path="/login" render={props => 
            <Login />
          }/>
          <Route exact path="/signup" render={props => 
            <Signup />
          }/>
        </Switch>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
