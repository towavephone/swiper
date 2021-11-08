/* eslint-disable no-restricted-globals */
import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from '../../build/core';
import { Swiper, SwiperSlide } from '../../build/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);

const App = () => {
  return (
    <main>
      <Swiper
        onSwiper={(swiper) => (window.swiper = swiper)}
        navigation
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        direction='vertical'
        mousewheel
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </main>
  );
};

export default App;
