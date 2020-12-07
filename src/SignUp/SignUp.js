import React from 'react'
import './SignUp.css'

export default class SignUp extends React.Component {
    state = {
        errorMessage: "",
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
        // validation goes here
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Sign Up</h2>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label htmlFor='email-input' >Email Address</label>
                    <input type='text' id='email-input' name="email" />
                    <label htmlFor='password-input' >Password</label>
                    <input type='password' id='password-input' name='password' />
                    <label htmlFor='reenter-password-input' >Re-enter Password</label>
                    <input type='password' id='reenter-password-input' name='reenter-password' />
                    <button type='reset' id='reset-button' >Reset</button>
                    <button type='submit' id='submit-button' >Submit</button>
                </fieldset>
                <h4>{this.state.errorMessage}</h4>
            </form>
        )
    }
}