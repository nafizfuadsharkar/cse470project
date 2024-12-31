import React from "react";
import useCourse from "../../../Hook/useCourse";
import { RiArrowRightUpLine } from "react-icons/ri";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

const Course = () => {
  const [course] = useCourse();
  console.log(course);
  return (
    <div
      className="md:px-6 lg:px-16 xl:px-32 px-6 lg:py-20 pt-72 "
    >
      <div data-aos="zoom-in"
      data-aos-duration="2000"
      className=" text-center flex justify-center items-center flex-col gap-4">
        <p className=" rounded-full w-[190px] py-2 px-4 bg-gray-50 text-blue-500 font-bold text-lg ">
          Top Class Course
        </p>
        <p className=" font-extrabold text-3xl lg:text-4xl">
          Explore Our Best Course
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-20">
        {course.slice(0, 6).map((item) => (
          <CourseCard key={item._id} item={item} />
        ))}
      </div>

      <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className=" flex justify-center items-center pt-10">
        <Link to="/course">
          <button className="flex items-center gap-1 bg-blue-500 px-5 py-2.5 hover:scale-105 hover:bg-blue-600 transition-all ease-in-out duration-700 rounded-full text-white">
            View More{" "}
            <span className="text-xl">
              <RiArrowRightUpLine />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
