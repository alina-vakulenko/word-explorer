import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./swiper.css";

register();

function PhotoSwiper({ photos }) {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
      }}
      navigation={true}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar, Navigation]}
      className="mySwiper"
    >
      {photos.map(function (photo, index) {
        return (
          <SwiperSlide>
            <img
              src={photo.src.landscape}
              className="img-fluid rounded"
              alt={photo.alt}
              loading="lazy"
            />
            <div class="swiper-lazy-preloader"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PhotoSwiper;
