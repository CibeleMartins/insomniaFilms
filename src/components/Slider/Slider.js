
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from './Slider.module.css'

// import required modules
import { EffectCards } from "swiper";

export default function Slider() {
  return (

    <div className={styles.main}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        <SwiperSlide className={styles.swiper}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper}>Slide 9</SwiperSlide>
      </Swiper>
      </div>
  );
}
