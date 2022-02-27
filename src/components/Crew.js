import React from 'react';
import Member from './Member';
import '../styles/Crew.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const Crew = ({ crewData }) => {
  const renderedMembers = crewData.map((member) => {
    return (
      <SwiperSlide>
        <Member member={member} />
      </SwiperSlide>
    );
  });

  return (
    <section className="crew">
      <div className="align-title-div">
        <h5 className="h5">
          <span>02</span> Meet your crew
        </h5>
      </div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {renderedMembers}
      </Swiper>
    </section>
  );
};

export default Crew;
