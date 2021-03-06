import React from 'react';
import Technology from './Technology';
import '../styles/Technologies.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Technologies = ({ technologiesData }) => {
  const renderedTechnologies = technologiesData.map((technology) => {
    return (
      <SwiperSlide key={technology.name}>
        <Technology technology={technology} />
      </SwiperSlide>
    );
  });
  const pagination = {
    el: '.pagination-container',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <section className="technologies">
      <div className="align-title-div">
        <h5 className="h5">
          <span>03</span> Space launch 101
        </h5>
      </div>

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {renderedTechnologies}
      </Swiper>
    </section>
  );
};

export default Technologies;
