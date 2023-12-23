import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { mainBanner } from "../../../images";

const WeeklyBest = () => {
  return (
    <div className='flex items-center flex-col'>
      <div className='text-center text-3xl'>برترین‌های هفته</div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper mt-20'
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <SwiperSlide>
            <img
              src={mainBanner}
              className='max-w-56 max-h-56 object-contain'
              alt='testImage'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default WeeklyBest;
