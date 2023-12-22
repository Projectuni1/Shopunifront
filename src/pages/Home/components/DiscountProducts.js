import React from "react";
import testImage from "../../../images/w4-4.jpeg";

const DiscountProducts = () => {
  return (
    <div className='flex items-center flex-col mt-32'>
      <div className='text-center text-3xl'>برترین‌های هفته</div>
      <div className='flex items-center space-x-7 space-x-reverse mt-20'>
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className='w-56 bg-[#EDE3DA] h-80 p-4 rounded-xl flex justify-between flex-col items-center'
          >
            <img
              src={testImage}
              alt='testImage'
              className='rounded-md h-44 w-44 object-contain'
            />
            <div className='text-center my-3 text-base'>
              انواع گوشی انواع گوشی انواع گوشی
            </div>
            <button
              type='button'
              className='w-28 h-10 rounded-lg font-semibold text-white bg-[#742062] text-sm'
            >
              مشاهده
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProducts;
