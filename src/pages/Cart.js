import React from "react";
import { pic2 } from "../images";
const Cart = () => {
  return (
    <div className=''>
      <div className='text-3xl flex items-center'>
        سبد خرید
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='30'
          height='30'
          fill='currentColor'
          className='bi bi-cart3 ml-3 font-bold mr-4'
          viewBox='0 0 16 16'
        >
          <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2' />
        </svg>
      </div>
      <div className='space-y-8 flex flex-col mt-20 w-1/2 mx-auto'>
        <div className='flex items-center space-x-reverse justify-between'>
          <img src={pic2} alt='pic' className='w-32' />
          <div className='flex flex-col space-y-2'>
            <div className='text-xl'>آیفون 13 پرو</div>
            <div className='text-gray-500'>مشکی</div>
          </div>
          <div className='text-xl'>1 عدد</div>
          <div className='text-xl text-red-500 cursor-pointer'>حذف</div>
        </div>
        <div className='flex items-center space-x-reverse border-t border-gray-400 pt-16  justify-between'>
          <img src={pic2} alt='pic' className='w-32' />
          <div className='flex flex-col space-y-2'>
            <div className='text-xl'>آیفون 13 پرو</div>
            <div className='text-gray-500'>مشکی</div>
          </div>
          <div className='text-xl'>1 عدد</div>
          <div className='text-xl text-red-500 cursor-pointer'>حذف</div>
        </div>
        <div className='flex items-center space-x-reverse border-t border-gray-400 pt-16 justify-between'>
          <img src={pic2} alt='pic' className='w-32' />
          <div className='flex flex-col space-y-2'>
            <div className='text-xl'>آیفون 13 پرو</div>
            <div className='text-gray-500'>مشکی</div>
          </div>
          <div className='text-xl'>1 عدد</div>
          <div className='text-xl text-red-500 cursor-pointer'>حذف</div>
        </div>
      </div>
      <div className='w-full flex items-center justify-end mt-20'>
        <button className='bg-[#742062] flex items-center text-white px-6 py-4 rounded-lg'>
          ثبت سفارش
        </button>
      </div>
    </div>
  );
};

export default Cart;
