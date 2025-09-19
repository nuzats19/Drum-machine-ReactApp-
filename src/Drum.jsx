import React from 'react';

const Drum = ({ audioClip }) => {
  const playSound = (clip) => {
    const audio = document.getElementById(clip.keyTrigger);
    if (audio) audio.play().catch(console.error);
    const display = document.getElementById("display");
    if (display) display.innerText = audioClip.description;
  };

  return (
    <button
      className='drum-pad'
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio src={audioClip.url} id={audioClip.keyTrigger} className='clip'></audio>
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
