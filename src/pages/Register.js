import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <div className="text-3xl text-[#000]">ثبت نام</div>
        <form className="w-[50%] flex flex-col gap-4">
          <input className="w-full h-12 pr-4 border border-[#000] rounded-lg" placeholder="نام و نام خانوادگی"></input>
          <input className="w-full h-12 pr-4 border border-[#000] rounded-lg" placeholder="ایمیل"></input>
          <input className="w-full h-12 pr-4 border border-[#000] rounded-lg" placeholder="رمز عبور"></input>
          <input className="w-full h-12 pr-4 border border-[#000] rounded-lg" placeholder="تایید رمز عبور"></input>
          <Link to="/" className="w-full h-12 bg-[#742062] flex items-center justify-center rounded-lg">
            <p className="pr-4 text-[#fff]">ورود</p>
          </Link>
        </form>
      </div>
      <div className="w-[30rem] h-[20rem] flex justify-end items-center absolute left-0">
        <div className="w-[10rem] h-[20rem] flex flex-row-reverse items-center bg-[#EDE3DA] rounded-r-[10rem]">
          <div className="w-[5rem] h-[10rem] bg-[#742062] rounded-r-[5rem]"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
