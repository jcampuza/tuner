import React, { Component } from 'react';

// import Sidebar from '../components/Sidebar.js';
import AudioRecord from '../components/AudioRecord.js';

class Home extends Component {
  render() {
    return (
        <section>
            <main className="container">
               <AudioRecord></AudioRecord> 
            </main>
        </section>
    );
  }
}

export default Home;