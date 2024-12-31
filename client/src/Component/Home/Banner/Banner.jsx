import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Banner = () => {
  return (
    <div
     className=" md:px-6 lg:px-16 xl:px-32 px-6 lg:py-0 py-36 ">
      <div className=" flex flex-col lg:flex-row lg:justify-between items-center h-screen lg:gap-8 gap-20">
        <div className=" space-y-2 md:space-y-3 lg:pt-10">
          <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" text-2xl md:text-3xl lg:w-[550px] lg:text-4xl font-bold xl:text-5xl  text-gray-900">
            Never Stop Learning{" "}
          </h3>
          <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-2xl md:text-3xl lg:w-[600px] pt-2 pb-2 lg:text-4xl xl:text-5xl font-bold text-gray-900">
            Life Never Stop Teaching
          </h3>
          <p data-aos="fade-up"
          data-aos-duration="2000"
           className=" text-sm sm:text-lg lg:w-[400px] xl:w-[500px] pb-5 text-gray-500">
            Every teaching and learning journey is unique Following We'll help
            guide your way.
          </p>
          <Link
           data-aos="fade-up"
           data-aos-duration="2500"
            to="/signUp"
            className=" w-[138px] md:w-[157px] flex items-center gap-1 font-medium px-3.5 py-2.5 md:px-4 md:py-3 bg-blue-500   text-white hover:bg-blue-700 text-sm md:text-base rounded-full hover:scale-105 duration-700 ease-in-out transition-all "
          >
            Register Now{" "}
            <span className="pt-1">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>
        <div 
        className=" relative">
          <div 
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="hidden md:flex md:flex-col absolute shadow-md bg-white px-5 py-2 rounded-md md:-left-36 lg:-left-44 right-96 w-[220px]">
            <div>
              <p className=" font-bold">Our Happy Students</p>
              <p className=" font-bold text-blue-500">12+ online course</p>
            </div>
            <div className="avatar-group -space-x-4 pt-2 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-8">
                  <img src="https://themegenix.com/demo/skillgro/assets/img/banner/banner_author01.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://themegenix.com/demo/skillgro/assets/img/banner/banner_author02.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-8">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          </div>
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            className=""
            src="https://themegenix.com/demo/skillgro/assets/img/banner/banner_img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
