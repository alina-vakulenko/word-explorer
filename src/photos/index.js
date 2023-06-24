import { useState, useEffect } from "react";

import getPhotos from "../services/photos.service";
import { useSearchContext } from "../context/searchContext";

import style from "./Photos.module.css";

function Photos() {
  const [photosLoading, setPhotosLoading] = useState(null);
  const [photosError, setPhotosError] = useState(null);
  const [photos, setPhotos] = useState([]);

  const { keyword } = useSearchContext();

  useEffect(() => {
    let isSubscribed = true;

    const fetchPhotos = async () => {
      try {
        const response = await getPhotos(keyword, 6);
        if (isSubscribed) {
          setPhotos(response.data.photos);
        }
      } catch (err) {
        console.log(err);
        setPhotosError(err.message);
      }
    };

    setPhotosLoading(true);
    fetchPhotos();
    setPhotosLoading(false);

    return () => {
      isSubscribed = false;
    };
  }, [keyword]);

  if (photosError) {
    return <h3>{photosError}</h3>;
  }

  return (
    <section>
      {photosLoading ? (
        <h3>Photos loading</h3>
      ) : (
        photos.length > 0 && (
          <div className="row">
            {photos.map(function (photo, index) {
              return (
                <div className="col-6 col-sm-4" key={index}>
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noopener noreferrer"
                    label="original photo link"
                  >
                    <div className={style.container}>
                      <img
                        src={photo.src.landscape}
                        className="img-fluid rounded"
                        alt={photo.alt}
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        )
      )}
    </section>
  );
}

export default Photos;
