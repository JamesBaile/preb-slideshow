import React, { Component } from 'react';
import './App.css';
import Slideshow from './Slideshow';
import Sound from 'react-sound';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>The Prebendal Manor</h1>
          <h3>Weddings</h3>
        </div>
        <Slideshow />
        <Sound
          url="./music/Ludovico-Einaudi-I-Giorni.mp3"
          playStatus={Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.loop = true}
        />
      </div>

    );
  }
}

export default App;
