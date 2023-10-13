import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  console.log(swiper);
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);

  return <></>;
};

const Carousel = ({ data, renderComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        style={{ padding: "0px 20px " }}
        initialSlide={0}
        module={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.title}>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
