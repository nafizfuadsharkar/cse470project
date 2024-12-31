import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { GoBook } from "react-icons/go";
import { PiCertificateBold } from "react-icons/pi";
const Offer = () => {
  return (
    <div className="md:px-6 lg:px-16 xl:px-32 px-6 md:pt-20 lg:pt-0 lg:pb-20 py-3 ">
      <div className=" gap-10 lg:gap-4 flex flex-row flex-wrap justify-center items-center ">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" w-[410px] h-[180px] hover:shadow-lg hover:scale-105 duration-1000 transition-all ease-in-out rounded-md p-6 cursor-pointer bg-gray-50 "
        >
          <div className="  flex lg:flex-col xl:flex-row items-center gap-3">
            <span className=" text-2xl py-2.5 px-2.5 md:text-3xl bg-blue-500 md:py-3 md:px-3 rounded-full text-white">
              <LuGraduationCap />
            </span>
            <h3 className=" text-xl md:text-2xl font-Poppins font-bold">Expert Tutors</h3>
          </div>
          <p className=" pt-3 text-gray-600">
            Dedicated educators guiding students with personalized learning
            solutions.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" w-[410px] h-[180px] hover:shadow-lg hover:scale-105 duration-1000 transition-all ease-in-out rounded-md p-6 cursor-pointer bg-gray-50 "
        >
          <div className="  flex lg:flex-col xl:flex-row items-center gap-3">
            <span className=" text-2xl py-2.5 px-2.5 md:text-3xl bg-blue-500 md:py-3 md:px-3 rounded-full text-white">
              <GoBook />
            </span>
            <h3 className=" text-xl  md:text-2xl font-Poppins font-bold">
              Effective Course
            </h3>
          </div>
          <p className=" pt-3 text-gray-600">
            Explore our effective courses—designed for optimal learning and
            practical application.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="w-[410px] h-[180px]  hover:shadow-lg hover:scale-105 duration-1000 transition-all ease-in-out rounded-md p-6 cursor-pointer bg-gray-50 "
        >
          <div className="  flex lg:flex-col xl:flex-row items-center gap-3">
            <span className=" text-2xl py-2.5 px-2.5 md:text-3xl bg-blue-500 md:py-3 md:px-3 rounded-full text-white">
              <PiCertificateBold />
            </span>
            <h3 className=" text-xl md:text-2xl font-Poppins font-bold">
              Earn Certificate
            </h3>
          </div>
          <p className=" pt-3 text-gray-600">
            Earn a recognized certificate, validating your skills and
            achievements
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
