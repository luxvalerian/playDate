import React from 'react';
import { Switch, Route } from 'react-router-dom'

// reusable components --presentational
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//  page components
import Home from './pages/Home/Home';
import Playdates from './pages/Playdates/Playdates';

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
        </Switch>
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
