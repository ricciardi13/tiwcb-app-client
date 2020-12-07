import React from 'react'
import './Login.css'

export default class Login extends React.Component {
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
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h2>Log In</h2>
                <fieldset>
                    <legend>Login</legend>
                    <label htmlFor='email-input' >Email Address</label>
                    <input type='text' id='email-input' name="email" />
                    <label htmlFor='password-input' >Password</label>
                    <input type='password' id='password-input' name='password' />
                    <button type='reset' id='reset-button' >Reset</button>
                    <button type='submit' id='submit-button' >Submit</button>
                </fieldset>
                <h4>{this.state.errorMessage}</h4>
            </form>
        )
    }
}