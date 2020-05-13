import React, {Component} from 'react'

class YouTubeDebugger extends Component {

    state={
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }
    handleBitrateClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            ...this.state,
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.handleBitrateClick}>Bitrate</button>
                <button className='resolution' onClick={this.handleResolutionClick}>Resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger