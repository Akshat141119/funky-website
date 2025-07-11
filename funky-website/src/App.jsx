import React from 'react';
import FunkyHeader from './components/FunkyHeader';
import AnimatedCard from './components/AnimatedCard';
import './index.css';

function App() {
  return (
    <div className="fade-scene soft-zoom">
      <div className="sakura"></div>
      <FunkyHeader />

      <audio autoPlay loop>
        <source
          src="/audio/bg-music.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div className="card-container">
        <AnimatedCard title="A Memory" content="He looked back only once... and it was enough." />
        <AnimatedCard title="Sound of Summer" content="The cicadas cried as if narrating the goodbye." />
        <AnimatedCard title="Whisper" content="Even if we're worlds apart, we'll find each other again." />
      </div>

      <div className="character">
        <p>"She waited beneath the cherry tree, where silence spoke louder than words."</p>
      </div>

      <a href="/audio/bg-music.mp3" target="_blank" rel="noopener noreferrer">
        Listen to background music
      </a>
    </div>
  );
}

export default App;