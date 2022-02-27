import React from 'react';
import '../styles/Destination.css';
import Planet from './Planet';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Destination = ({ destinationData }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        destinationData[index].name +
        '</span>'
      );
    },
  };
  const renderedPlanets = destinationData.map((planet) => {
    return (
      <SwiperSlide>
        <Planet planet={planet} />
      </SwiperSlide>
    );
  });

  return (
    <section className="destination">
      <div className="align-title-div">
        <h5 className="h5">
          <span>01</span> Pick your destination
        </h5>
      </div>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderedPlanets}
      </Swiper>
    </section>
  );
};

export default Destination;
