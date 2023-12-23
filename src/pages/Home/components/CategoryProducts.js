import React from "react";
import { pic1 } from "../../../images";
const CategoryProducts = () => {
  return (
    <div className='flex items-center flex-col mt-32'>
      <div className='text-center text-3xl'>خرید بر اساس دسته بندی</div>
      <div className='grid grid-cols-3 gap-24 space-x-7 space-x-reverse mt-20'>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div className='flex items-center flex-col'>
            <img
              src={pic1}
              alt='categoty product test'
              className='w-40 h-40 object-contain'
            />
            <div className='mt-3'>گوشی موبایل</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
