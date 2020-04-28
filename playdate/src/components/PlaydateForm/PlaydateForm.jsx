import React, { Component } from 'react';

import userService from '../../utils/userService';
import playdateService from '../../utils/playdateService';

import styles from './PlaydateForm.module.css';

class PlaydateForm extends Component {

    // below holds value of input tags
    state = this.getInitialState();

    getInitialState(){
        return {
            title: '',
            location: '',
            error: ''
        };
    }

    // returns expression that will evaluate presence of email and password
    isFormValid = () => {
        return (
            this.state.title && 
            this.state.location
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
            const { title, location } = this.state;
            const addedBy = userService.getUser()._id
            await playdateService.create({ title, location, addedBy });
            this.setState(this.getInitialState(), () => {
                this.props.handleGetPlaydates();
                // route the user back to the home screen
                this.props.history.push('/playdates');
                });

        } catch (error) {
            this.setState({
                title: '',
                location: '',
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
                    <legend>New Playdate Form</legend>
                    
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        name="title" 
                        type="title" 
                        value={this.state.title}
                        onChange={this.handleChange}
                        />
                    
                    <label htmlFor="location">Location</label>
                    <input 
                        id="location"  
                        name="location" 
                        type="location" 
                        value={this.state.location}
                        onChange={this.handleChange}
                        />
                    
                    <button disabled={!this.isFormValid()} type="submit">Add Playdate</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default PlaydateForm;