
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from './Slider.module.css'

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
