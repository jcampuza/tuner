import React, { Component } from 'react';

import Sidebar from '../components/Sidebar.js';
import Navbar from '../components/Navbar.js';
import AudioRecord from '../components/AudioRecord.js';

class Home extends Component {
  render() {
    return (
        <section>
            <Navbar></Navbar>
            {/*<Sidebar></Sidebar>*/}
            <main className="container">
               <AudioRecord></AudioRecord> 
            </main>
        </section>
    );
  }
}

export default Home;