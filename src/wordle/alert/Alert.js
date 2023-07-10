import style from "./Alert.module.css";

const Alert = ({ variant, message, isVisible }) => {
  return (
    <div className={style.alertContainer}>
      <div
        className={`${style.alert} ${
          variant === "error"
            ? style.error
            : variant === "success"
            ? style.success
            : style.info
        } ${isVisible ? "" : style.hide}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
