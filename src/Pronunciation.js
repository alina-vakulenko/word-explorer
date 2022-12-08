import React from "react";
import "./Pronunciation.css";

function Pronunciation(props) {
  if (!props.pronunciation) {
    return null;
  }

  const audioLink = props.pronunciation.audio;
  const pronunciationText = props.pronunciation.text;

  function handleClick() {
    const audio = new Audio(audioLink);
    audio.play();
  }

  if (audioLink) {
    return (
      <div className="Pronunciation">
        <i
          className="fa-regular fa-circle-play active"
          onClick={handleClick}
        ></i>
        <span className="pronunciation-text">{pronunciationText}</span>
      </div>
    );
  } else {
    return (
      <div className="Pronunciation">
        <i className="fa-regular fa-circle-play inactive"></i>
        <span className="pronunciation-text">{pronunciationText}</span>
      </div>
    );
  }
}

export default Pronunciation;
