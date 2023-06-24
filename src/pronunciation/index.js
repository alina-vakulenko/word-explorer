import style from "./Pronunciation.module.css";

function Pronunciation({ pronunciation }) {
  const audioLink = pronunciation.audio;
  const pronunciationText = pronunciation.text;

  function handleClick() {
    const audio = new Audio(audioLink);
    audio.play();
  }

  return (
    pronunciation && (
      <div className={style.pronunciation}>
        <i
          className={
            audioLink
              ? `fa-regular fa-circle-play ${style.active}`
              : "fa-regular fa-circle-play text-muted"
          }
          onClick={handleClick}
        ></i>
        <span className={style.text}>{pronunciationText}</span>
      </div>
    )
  );
}

export default Pronunciation;
