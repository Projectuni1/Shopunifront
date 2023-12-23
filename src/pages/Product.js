import React from "react";
import { productImage } from "../images";

const Product = () => {
  return (
    <div>
      <div>دسته بندی: دیجیتال / گوشی / آیفون</div>
      <div className='mt-16'>
        <div className='grid grid-cols-[400px_1fr]'>
          <div className='flex items-center justify-center'>
            <img className='w-64' src={productImage} alt='iphone 13' />
          </div>
          <div className=''>
            <span className='text-xl font font-semibold'>آیفون 13 پرومکس</span>
            <div className='flex items-center my-7'>
              <span className='w-7 h-7 bg-blue-500 rounded-full ml-3'></span>
              آبی
            </div>
            <div>
              528 گیگابایت
              <ul className='mt-4 space-y-3'>
                <li>فناوری صفحه‌ نمایش :Super Retina XDR OLED</li>
                <li>رزولوشن عکس :12 مگاپیکسل</li>
                <li>نسخه سیستم عامل :iOS 15</li>
                <li>اندازه :6.7</li>
                <li>اقلام همراه :دفترچه‌ راهنما، کابل Lightning</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-full flex items-center justify-end mt-20'>
          <button className='bg-[#742062] flex items-center text-white px-6 py-4 rounded-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              className='bi bi-cart3 ml-3'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
            </svg>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Product;
