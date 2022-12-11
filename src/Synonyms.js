import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms.length === 0) {
    return null;
  }
  return (
    <div className="Synonyms">
      <h6>Synonyms</h6>
      <div className="synonyms-block">
        <div className="row">
          {props.synonyms.map((synonym, index) => (
            <div className="col-3 synonym" key={index}>
              {synonym}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Synonyms;
