
import { useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from './Slider.module.css'

// import required modules
import { EffectCards } from "swiper";

export default function Slider({data}) {


console.log(data)
  

  return (

    <div className={styles.main}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >

        {data ? data.map((m)=> {
          return (
            <SwiperSlide key={m.Title} className={styles.swiper}>{m.Title}</SwiperSlide>
          )
        }) : <SwiperSlide>Nao tem data</SwiperSlide>}
        
 
      </Swiper>
      </div>
  );
}
