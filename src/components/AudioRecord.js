import React, { Component } from 'react';

import Button from './Button.js';

import './AudioRecord.css';


class AudioRecord extends Component {
  
  state = {
    isRecording: false
  }

  constructor() {
      super();

      this.startRecording = this.startRecording.bind(this);
  }

  startRecording(event) {
      console.log('hello');
      this.setState((prevState, props) => {
          return { isRecording: !prevState.isRecording };
      });
  }
  
  render() {
    return (
        <section className="AudioRecord">
            <h3>Record a new snippet</h3>

            <div>
                <Button onPress={this.startRecording}>Start recording</Button>
            </div>
        </section>
    );
  }
}

export default AudioRecord;