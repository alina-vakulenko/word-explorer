import { useState, useEffect } from "react";

import getPhotos from "../services/photos.service";
import { useSearchContext } from "../context/searchContext";
import PhotoSwiper from "./swiper";

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
        const response = await getPhotos(keyword, 12);
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
    <section className={style.container}>
      {photosLoading ? (
        <h3>Photos loading</h3>
      ) : (
        photos.length > 0 && <PhotoSwiper photos={photos} />
      )}
    </section>
  );
}

export default Photos;
