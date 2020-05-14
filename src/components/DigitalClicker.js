// Code DigitalClicker Component Here
import React, { Component } from 'react'


export class DigitalClicker extends Component {

    state = {
        timesClicked: 0

    }
    
    incrementButton = () =>{ 
        
        this.setState(prevState => ({
            timesClicked: prevState.timesClicked + 1 
       }))

    }
    render() {
        return (
            <div>
                <button
                  onClick = {this.incrementButton}
                >
                    {this.state.timesClicked}
                </button>
            </div>
        )
    }
}

export default DigitalClicker
