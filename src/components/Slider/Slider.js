import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";

import Loading from "../Loading/Loading";
import MovieDetailsModal from "../MovieDetails/MovieDetails";

import "swiper/css";
import "swiper/css/effect-cards";

import styles from './Slider.module.css'

// import required modules
import { EffectCards } from "swiper";
import { HStack, Button } from "@chakra-ui/react";

export default function Slider({data}) {

  const [displayDetails, setDisplayDetails] = useState({display: false, details: []});

  console.log(displayDetails)
  

  return (

    <>
    {displayDetails.display === true && 
    <MovieDetailsModal>
      <HStack>

        <img alt="poster" src={displayDetails.details[1]}/>

        <div className={styles.containerDetails}>

          <div className={styles.details}>
            <h2>{displayDetails.details[0]}</h2>
            <h3>{displayDetails.details[2]}</h3>
          </div>
        

          <Button className={styles.btn}>Locar</Button>
        </div>

      </HStack>
    </MovieDetailsModal>}
    <div className={styles.main}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >

        {data ? data.map((m)=> {
          return (

            <>
            <SwiperSlide onClick={()=> setDisplayDetails({display: true, details: [m.Title, m.Poster, m.Year]})} key={m.Title} className={styles.swiper}>
              <img className={styles.poster} alt="poster" src={m.Poster}/>

              <p>{m.Title}</p>
            </SwiperSlide>

  
            </>
          )
        }) : <SwiperSlide>
            <Loading/>
          </SwiperSlide>}
        
 
      </Swiper>
      </div>

      </>

  );
}
