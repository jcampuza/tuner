import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './AudioRecord.css';

import TuningList from './TuningList.js';

class AudioRecord extends Component {
  render() {
    return (
        <div className="AudioRecord">
            <div className="AudioRecord__panel">
                <h3 className="AudioRecord__panel--pick">Choose A Tuning To Start</h3>
                <TuningList></TuningList>
            </div>
            <div className="AudioRecord__panel">
                <h3 className="AudioRecord__panel--pick">hi</h3>
            </div>
        </div>
    );
  }
}

export default AudioRecord;