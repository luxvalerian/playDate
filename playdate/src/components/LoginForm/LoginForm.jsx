import React, { Component } from 'react';
// TODO: import userservice

import styles from './LoginForm.module.css';

class LoginForm extends Component {

    // below holds value of input tags
    state = this.getInitialState();

    getInitialState(){
        return {
            email: '',
            password: '',
        };
    }


// below, 'e' represents 'event'. no parentheses without more than one parameter
    handleChange = e => {
        // make a call to setState. we want setState to reflect the changes
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // TODO: call login function from userservice passing in credentials
        // now we clear our form
        this.setState(this.getInitialState());
        // TODO: This is where you would call handleSignupOrLogin
    
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <fieldset> 
                    <legend>Login Form</legend>
                    
                    <label htmlFor="email">Email</label>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    
                    <button type="submit">Login</button>
                </fieldset>
            </form>
        );
    }
}

export default LoginForm;