import React, { Component } from 'react';
// TODO: import userservice

import styles from './LoginForm.module.css';
import userService from '../../utils/userService';

class LoginForm extends Component {

    // below holds value of input tags
    state = this.getInitialState();

    getInitialState(){
        return {
            email: '',
            password: '',
            error: ''
        };
    }

    // returns expression that will evaluate presence of email and password
    isFormValid = () => {
        return (
            this.state.email && 
            this.state.password
        );
    }


// below, 'e' represents 'event'. no parentheses without more than one parameter
    handleChange = e => {
        // make a call to setState. we want setState to reflect the changes
        this.setState({
            error: '',
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;

        try {
            const { email, password } = this.state;

            await userService.login({ email, password });
            // we pass the data from state to a service module
            // check if user exists then check for password match
            // if matched, token is created and sent to client

            // now we clear our form:
            this.setState(this.getInitialState(), () => {
                this.props.handleSignupOrLogin();
                // route the user back to the home screen
                this.props.history.push('/playdates');
                });

        } catch (error) {
            this.setState({
                email: '',
                password: '',
                error: error.message
            });
            
        }
        // TODO: call login function from userservice passing in credentials
        // now we clear our form
        // TODO: This is where you would call handleSignupOrLogin
    
    }

    render () {
        return (
            <section className={styles.section}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }
            <form onSubmit={this.handleSubmit} >
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
                    
                    <button disabled={!this.isFormValid()} type="submit">Login</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default LoginForm;