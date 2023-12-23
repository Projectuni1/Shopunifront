import React from "react";

const Search = () => {
  return (
    <div className='h-80'>
      <div className='w-1/3 h-16 relative mx-auto'>
        <input
          className='bg-gray-100 w-full h-full p-4 rounded-2xl focus:outline-none'
          name='dd'
          type='text'
          placeholder='جستجو'
        />
        <button className='absolute top-5 left-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            className='bi bi-search text-gray-500'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
