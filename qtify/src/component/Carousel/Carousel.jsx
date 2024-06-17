import React, { useEffect } from 'react'
import {Navigation} from 'swiper';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import CrouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';
import CrouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import 'swiper/css';

import styles from './Carousel.module.css';

const Controls = ({data}) =>{
  const swiper = useSwiper();
  useEffect(()=>{
    swiper.slideTo(0,1);
  }, [data])

  return <></>
}

function Carousel({data, renderComponent}) {

  
  return (
    <div className={styles.wraper}>
      <Swiper 
        style={{padding:"0px 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove >
          <Controls data={data} />
          <CrouselLeftNavigation />
          <CrouselRightNavigation />
          {data.map((ele) => (
              <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default Carousel