import React from "react";
import { useParams } from 'react-router-dom';
import Login from "../pages/Login";
import Register from "../pages/Register";
const Authentication = () => {
  let { login } = useParams();

  return (
      <div className='w-full px-[3rem] py-[2rem]'>
        <div className="w-full py-[1rem] flex flex-row justify-between items-center">
          {login === "login" ? <Login/> : <Register/> }
        </div>
      </div>
  );
};

export default Authentication;
