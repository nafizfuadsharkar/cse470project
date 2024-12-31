import React from "react";
import { FaAngleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";
const Choose = () => {
  return (
    <div className="md:px-6 lg:px-16 xl:px-32 px-6 lg:py-0  ">
      <div className=" flex flex-col lg:flex-row lg:justify-center items-center h-screen lg:gap-16 gap-20">
        <div className="flex-1 lg:w-[70%] mx-auto">
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className=" mb-5 rounded-full w-[200px] py-2 px-4 bg-gray-50 text-blue-500 font-bold text-lg "
          >
            Why Choose Us
          </h2>
          <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" text-2xl md:text-3xl lg:w-[700px] lg:text-4xl font-bold xl:text-4xl  text-gray-900">
            Learn The New Beautiful
          </h3>
          <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-2xl md:text-3xl lg:w-[600px] pt-2 pb-2 lg:text-4xl xl:text-4xl font-bold text-gray-900">
            Online Education
          </h3>
          <p 
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" text-sm sm:text-base lg:w-[540px] pt-2 text-gray-500">
            Choose us for unparalleled learning experiences. Our expert-led
            courses, interactive content, and commitment to excellence ensure a
            transformative educational journey. Join SkillForge for knowledge
            that empowers and inspires.
          </p>
          <p data-aos="fade-up"
          data-aos-duration="2000"
           className=" pt-6 flex items-center text-base md:text-lg font-bold gap-3 pb-5">
            <span className=" text-lg md:text-xl py-1 px-1 shadow-md  rounded-full bg-blue-500 text-white">
              <TiTick />
            </span>{" "}
            Learn from experienced educators.
          </p>
          <p data-aos="fade-up"
          data-aos-duration="2000"
           className=" flex items-center text-base md:text-lg font-bold gap-3 pb-5">
            <span className=" text-lg md:text-xl py-1 px-1  rounded-full shadow-md bg-blue-500 text-white">
              <TiTick />
            </span>{" "}
            Access relevant and current material.
          </p>
          <p
           data-aos="fade-up"
           data-aos-duration="2000"
          className=" flex items-center text-base md:text-lg font-bold gap-3 pb-3">
            <span className=" text-lg md:text-xl py-1 px-1 rounded-full shadow-md bg-blue-500 text-white">
              <TiTick />
            </span>{" "}
            A platform dedicated to your achievement.
          </p>
          <Link
           data-aos="fade-up"
           data-aos-duration="2000"
            to="/signUp"
            className=" mt-8  w-[138px] md:w-[157px] flex items-center gap-1 font-medium px-3.5 py-2.5 md:px-4 md:py-3 bg-blue-500   text-white hover:bg-blue-700 text-sm md:text-base rounded-full hover:scale-105 duration-700 ease-in-out transition-all  "
          >
            Register Now{" "}
            <span className="pt-1">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>
        <div 
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex-1 rounded-full">
          <img
            className=" border-[8px] border-gray-100 mx-auto sm:w-[70%]  lg:w-full rounded-full"
            src="https://images.pexels.com/photos/3775128/pexels-photo-3775128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
