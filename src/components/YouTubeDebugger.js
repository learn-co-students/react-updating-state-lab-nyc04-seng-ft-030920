import React, { Component } from "react";

export default class YoutubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      handleClickBitrate = () => {
          this.setState(prevState => ({
              settings: {...this.state.settings,
              bitrate: 12
              }
          }))
      }

      handleClickReso = () => {
          this.setState({
              settings: {
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
              }
          })
      }

    render() {
        return(
            <div>
                <button className="bitrate" onClick={this.handleClickBitrate} >{this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleClickReso} >{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}