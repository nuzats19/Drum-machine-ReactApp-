import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Drum from './Drum';
export const audioClips = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];
 

function App() {

  const playAudio = (e) => {
    const audioClip = audioClips.find(clip => clip.keyTrigger === e.key.toUpperCase());
  if(!audioClip) return;
  const audio = document.getElementById(audioClip.keyTrigger);
  if (audio) audio.play().catch(console.error);
  const btn = document.getElementById("drum-" + audioClip.keyTrigger);
  if (btn) btn.focus();
  const display = document.getElementById("display");
  if (display) display.innerText = audioClip.description;
  };
  return (
    <div className='container' id='drum-machine' onKeyDown={playAudio}>
      <h1>Drum Machine</h1>
      <div className='whole-drum'>
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.keyTrigger}/>
        ) )}
      </div>
      <div id="display"></div>
    </div>
  )
}

export default App
