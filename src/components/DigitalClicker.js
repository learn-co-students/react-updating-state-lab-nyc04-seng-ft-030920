// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    state = {
        timesClicked: 0
    }

    handleClick = (evt) => {
        this.setState((prevState)=>({
            timesClicked: prevState.timesClicked + 1
        }))
    }


    render(){
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}