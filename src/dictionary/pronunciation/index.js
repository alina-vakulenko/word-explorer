import style from "./Pronunciation.module.css";

// const handleAudio = (link) => {
//   const audio = new Audio(link);
//   audio.play();
// };

function Pronunciation({ pronunciation }) {
  return Object.entries(pronunciation).map(([key, value]) => {
    return (
      <div key={key} className={style.pronunciation}>
        <i
          className={
            pronunciation.audio
              ? `fa-regular fa-circle-play ${style.active}`
              : "fa-regular fa-circle-play text-muted"
          }
          // onClick={handleAudio}
        ></i>
        <span className={style.text}>
          / {key === "all" ? value : `${key}: ${value}`} /
        </span>
      </div>
    );
  });
}

export default Pronunciation;
