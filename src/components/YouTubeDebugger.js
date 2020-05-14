// Code YouTubeDebugger Component He
import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

    constructor() {
        super();
    

    this.state = {

        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }
}   
    bitrate = () => {
         
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolution = () => {
        this.setState({
        settings: { 
           ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: "720p"
            }
         }
        })
    }

    render() {
        return (
            <div>
               <button onClick = {this.bitrate}> 
                  Count
                   
                </button>
                <br/>
                <button onClick = {this.resolution}>

                resolution   
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger
