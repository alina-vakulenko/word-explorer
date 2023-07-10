import { useEffect, useState } from "react";

import { useWordleContext } from "../../../context/wordleContext";

import style from "./Tile.module.css";

const FLIP_ANIMATION_DURATION = 400;
const SHAKE_ANIMATION_DURATION = 250;

const Tile = ({ letter, state, status, order }) => {
  const { dispatch } = useWordleContext();
  const [flip, setFlip] = useState(false);
  const [dance, setDance] = useState(false);
  const [shake, setShake] = useState(false);
  const [tileState, setTileState] = useState("");

  useEffect(() => {
    let flipTimeout;
    let colorTimeout;

    // state is defined in a reducer once a user submits a word
    if (state) {
      flipTimeout = setTimeout(() => {
        setFlip(true);
        colorTimeout = setTimeout(() => {
          setTileState(state);
          dispatch({ type: "updateUsedLetters", payload: { letter, state } });
        }, FLIP_ANIMATION_DURATION / 2);
      }, (FLIP_ANIMATION_DURATION / 2) * order);
    }

    return () => {
      clearTimeout(flipTimeout);
      clearTimeout(colorTimeout);
    };
  }, [state, letter, order, dispatch]);

  const handleDance = () => {
    if (status === "correct") {
      setTimeout(
        () => setDance(true),
        FLIP_ANIMATION_DURATION * 2 - (FLIP_ANIMATION_DURATION / 5) * order
      );
    }
  };

  useEffect(() => {
    let shakeTimeoutId;
    if (status === "mistake") {
      shakeTimeoutId = setTimeout(() => {
        setShake(true);
      }, SHAKE_ANIMATION_DURATION);
    }

    return () => clearTimeout(shakeTimeoutId);
  }, [status, order]);

  const handleAnimationEnd = () => {
    setShake(false);
    dispatch({ type: "animate", payload: "" });
  };

  const handleFlip = () => {
    setFlip(false);
    handleDance();
  };

  return (
    <div
      data-state={tileState}
      data-action={flip ? "flip" : dance ? "dance" : shake ? "shake" : ""}
      onTransitionEnd={handleFlip}
      onAnimationEnd={handleAnimationEnd}
      className={style.tile}
    >
      {letter}
    </div>
  );
};

export default Tile;
