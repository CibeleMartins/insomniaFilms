// libs and hooks
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// context
import { AuthContext } from "../../context/use-auth";

// components
import { HStack, Button } from "@chakra-ui/react";
import Loading from "../Loading/Loading";
import MovieDetailsModal from "../MovieDetails/MovieDetails";

// styles
import "swiper/css";
import "swiper/css/effect-cards";
import styles from "./Slider.module.css";

export default function Slider({ data }) {
  const [displayDetails, setDisplayDetails] = useState({
    display: false,
    details: [],
  });

  const ctx = useContext(AuthContext);

  // const {films} = useContext(AuthContext)
  // console.log(films)

  const navigation = useNavigate();

  const closeModal = () => {
    setDisplayDetails({ display: false });
  };

  return (
    <>
      {/* modal */}
      {displayDetails.display === true && (
        <MovieDetailsModal onClose={closeModal}>
          <HStack>
            <img alt="poster" src={displayDetails.details[1]} />

            <div className={styles.containerDetails}>
              <div className={styles.details}>
                <h2>{displayDetails.details[0]}</h2>
                <h3>{displayDetails.details[2]}</h3>
                <h3>{displayDetails.details[3]}</h3>
              </div>

              <Button
                onClick={() => navigation("/locarFilme")}
                className={styles.btn}
              >
                Locar
              </Button>
            </div>
          </HStack>
        </MovieDetailsModal>
      )}

      {/* slider */}
      <div className={styles.main}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className={styles.mySwiper}
        >
          {data ? (
            data.map((m) => {
              return (
                <>
                  <SwiperSlide
                    onClick={() =>
                      setDisplayDetails({
                        display: true,
                        details: [m.title, m.poster, m.year, m.price],
                      })
                    }
                    key={m.id}
                    className={styles.swiper}
                  >
                    <img
                      className={styles.poster}
                      alt="poster"
                      src={m.poster}
                    />
                    {ctx.getDetailsMovie(displayDetails)}
                    <p>{m.title}</p>
                  </SwiperSlide>
                </>
              );
            })
          ) : (
            <SwiperSlide>
              <Loading />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
}
