import React from "react";

function Example(props) {
  if (!props.example) {
    return null;
  }
  return (
    <div className="Example">
      <i className="fa-solid fa-chevron-right"></i> {props.example}
    </div>
  );
}

export default Example;
