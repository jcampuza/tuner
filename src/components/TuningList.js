import React, { Component } from 'react';
import './TuningList.css';

const tunings = [
    {
        name: 'Standard',
        notes: ['E', 'A', 'D', 'G', 'B', 'E']
    },
    {
        name: 'Drop D',
        notes: ['D', 'A', 'D', 'G', 'B', 'E']
    },
    {
        name: 'Drop C',
        notes: ['C', 'G', 'C', 'F', 'A', 'C']
    },
    {
        name: 'Half-Step Down',
        notes: ['Eb', 'Ab', 'Db', 'Gb', 'Bb', 'Eb']
    },
    {
        name: 'Full-Step Down',
        notes: ['D', 'G', 'C', 'F', 'A', 'C']
    }
]

class TuningList extends Component {

    constructor() {
        super();
        this.state = {
            selected: null,
            allTunings: tunings
        }

        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(tuning) {
        let selected = tuning;
        if (this.state.allTunings.indexOf(tuning) < 0) return;
        else if (this.state.selected === selected) selected = null;
        
        this.setState((prevState, props) => {
            return {
                selected: selected
            }
        });
    }

    tuningRow(tuning, idx) {

        let selected = this.state.selected === tuning;
        return (
            <li className={selected ? 'noteRow--selected' : ''} key={idx} onClick={() => this.handleRowClick(tuning)}>
                <p>{tuning.name}</p>
                <ul className="noteRow">
                    {tuning.notes.map((note, idx) => {
                        return (
                            <li className="noteRow__note" key={idx}>
                                {note}
                            </li>
                        )
                    })}
                
                </ul>
            </li>
        )
    }

    tuningList(allTunings) {
        return (
            <ul className="TuningRows">
                {this.state.allTunings.map((tuning, idx) => this.tuningRow(tuning, idx))}
            </ul>
        )
    }

    render() {
        return (
            <div className="TuningList">
                {this.state.allTunings.length && this.tuningList(this.state.allTunings)}
            </div>
        );
    }
}

export default TuningList;
