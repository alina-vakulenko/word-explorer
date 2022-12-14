import React from "react";
import "./Photos.css";

function Photos(props) {
  if (!props.photos) {
    return null;
  }

  return (
    <div className="Photos">
      <div className="row">
        {props.photos.map(function (photo, index) {
          return (
            <div className="col-6 col-sm-4" key={index}>
              <a
                href={photo.src.original}
                target="_blank"
                rel="noopener noreferrer"
                label="original photo link"
              >
                <div className="photo-container">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid display-photo"
                    alt={photo.alt}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Photos;
