import React, { Component } from 'react';

// import Sidebar from '../components/Sidebar.js';
import AudioRecord from '../components/AudioRecord.js';

class About extends Component {
  render() {
    return (
        <section>
            {/*<Sidebar></Sidebar>*/}
            <main className="container">
               <h3>About this app</h3>
               <p>This is a bunch of bullshit as to why I made the app and why you should look at my stuff</p>
            </main>
        </section>
    );
  }
}

export default About;