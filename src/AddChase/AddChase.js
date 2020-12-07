import React from 'react'
import './AddChase.css'

export default class AddChase extends React.Component {
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
            <main>
                <h2>Add A Chase</h2>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Today I Was Chased By</legend>
                        <label htmlFor="chased-by-input">What Chased You?</label>
                        <input type="text" id="chased-by-input" name="chased-by" />
                        <label htmlFor="distance-input">How Far Were You Chased?</label>
                        <input type="number" id="distance-input" name="distance" />
                        <label htmlFor="time-input">How Long Were You Chased For?</label>
                        <input type="number" id="time-input" name="time" />
                        <button type="reset" id="reset-button" >Reset</button>
                        <button type="submit" id="submit-button" >Submit</button>
                    </fieldset>
                    <h4>{this.state.errorMessage}</h4>
                </form>
            </main>
        )
    }
}