import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// reusable components --presentational
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//  page components
import Home from './pages/Home/Home';
import Playdates from './pages/Playdates/Playdates';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.css';
import userService from './utils/userService';
import playdateService from './utils/playdateService';

class App extends Component {

  state = {
    user: userService.getUser(),
    playdates: [],
    featuredPlaydates: []
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser()}, () => {
      this.handleGetPlaydates();
    })
  }

  handleLogout = () => {
    // we need to call userService.logout();
    userService.logout();
    // we need to set the user property on state to null
    this.setState({ user: null, playdates: [] });
  }

  handleGetPlaydates = async () => {
    if(userService.getUser()) {
      const { playdates } = await playdateService.index();
      this.setState({ playdates });
    }
  }

  handleGetFeaturedPlaydates = async () => {
    const { featuredPlaydates } = await playdateService.getFeatured();
    this.setState({ featuredPlaydates });
  }

  componentDidMount () {
    this.handleGetFeaturedPlaydates();
    this.handleGetPlaydates();
  }

  render() {
      return (
        <div className="App-outer-container">
        <Navbar handleLogout={this.handleLogout} />
        <div className="App-inner-container">
          <Switch>
            <Route exact path="/" render={props =>
              <Home featuredPlaydates={this.state.featuredPlaydates}/>
            }/>
            <Route exact path="/playdates" render={props =>
            userService.getUser()
            ? <Playdates 
            {...props}
            handleGetPlaydates={this.handleGetPlaydates}
            playdates={this.state.playdates}
            />
            : <Redirect to="/login" />
            }/>
            <Route exact path="/login" render={props => 
              <Login 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin} //page component login
                />
              }/>
            <Route exact path="/signup" render={props => //route for signup
              <Signup 
              {...props} 
              handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          </Switch>
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
