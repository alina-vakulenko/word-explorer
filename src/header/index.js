import SearchForm from "./searchForm";

import imageLeft from "../assets/title-left.svg";
import imageRight from "../assets/title-right.svg";

import style from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>
        <nav></nav>
        <div className={style.content}>
          <h1 className={style.title}>
            Articles and <span className={style.textHighlight}>News</span>
          </h1>
          <p className={style.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam–quis.
          </p>
        </div>

        <img src={imageLeft} alt="" className={style.leftImg} />
        <img src={imageRight} alt="" className={style.rightImg} />
        <SearchForm />
      </header>
    </>
  );
}

export default Header;
