import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import SlideText from "./SlideText";

const Banners = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch("./banner.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBanners(data);
      });
  }, []);

  return (
    <div className="min-h-[calc(100vh-100px)] px-1 rounded-md">
      <Swiper
        style={{
          width: "100%",
          height: "500px",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {banners &&
          banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="w-full h-full relative rounded-md">
                <img
                  className="w-full h-[500px] rounded-md"
                  src={banner.image}
                />
                <SlideText banner={banner}></SlideText>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banners;
