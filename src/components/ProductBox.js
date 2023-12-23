import React, { useState, useEffect } from "react";
import { API_URL } from "../util/config";
import { pic2 } from "../images";
const ProductBox = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/v1/demo-controller/getitems`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }

      const productData = await response.json();
      console.log(productData);
      setProduct(productData);
    };

    fetchData();
  }, []);

  return (
    <div className='pt-10'>
      {product && (
        <div className='flex justify-between'>
          {product.map((item) => (
            <div
              key={item}
              className='w-56 bg-[#EDE3DA] h-80 p-4 rounded-xl flex justify-between flex-col items-center'
            >
              <img
                src={pic2}
                alt='testImage'
                className='rounded-md h-44 w-44 object-contain'
              />
              <div className='text-center my-3 text-base'>{item.title}</div>
              <button
                type='button'
                className='w-28 h-10 rounded-lg font-semibold text-white bg-[#742062] text-sm'
              >
                مشاهده
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductBox;
