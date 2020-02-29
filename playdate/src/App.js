import React from 'react';
import { Switch, Route } from 'react-router-dom'

// reusable components --presentational
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//  page components
import Home from './pages/Home/Home';
import Playdates from './pages/Playdates/Playdates';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.css';

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
            <Login /> //page component login
          }/>
          <Route exact path="/signup" render={props => //route for signup
            <Signup />
          }/>
        </Switch>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
