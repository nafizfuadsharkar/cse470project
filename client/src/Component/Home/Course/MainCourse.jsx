import React from "react";
import useCourse from "../../../Hook/useCourse";

import MainCourseCard from "./MainCourseCard";

const MainCourse = () => {
  window.scrollTo(0, 0);
  const [course] = useCourse();

  return (
    <div className="md:px-6 lg:px-16 xl:px-32 px-6 lg:py-36 py-32 ">
      <div
        data-aos="zoom-in"
        data-aos-duration="2000"
        className=" flex justify-center items-center flex-col gap-4"
      >
        <p className=" rounded-full w-[190px] py-2 px-4 bg-gray-50 text-blue-500 font-bold text-lg ">
          Top Class Course
        </p>
        <p className=" font-extrabold text-3xl lg:text-4xl ">
          Explore Our Best Course
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 py-20">
        {course.map((item) => (
          <MainCourseCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainCourse;
