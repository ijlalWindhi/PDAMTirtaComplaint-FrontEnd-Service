import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./carousel.css";

import Image1 from '../../../assets/image/carousel.png'
import { Image } from '@chakra-ui/react';

export default function Caraousel() {
  return (
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper" 
      style={{
        "--swiper-pagination-color": "#fff",
      }}>
        <SwiperSlide><Image src={Image1}/></SwiperSlide>
        <SwiperSlide><Image src={Image1}/></SwiperSlide>
        <SwiperSlide><Image src={Image1}/></SwiperSlide>
      </Swiper>
  )
}
