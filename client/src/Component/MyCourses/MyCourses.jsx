import React, { useContext, useEffect, useState } from "react";
import useEnrolledCourse from "../../Hook/useEnrolledCourse";
import { ScaleLoader } from "react-spinners";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hook/useAxiosPublic"; // Assuming you have this hook for Axios.

const MyCourses = () => {
  window.scrollTo(0, 0);

  const [enrolled, refetch] = useEnrolledCourse();
  const [isLoading, setIsLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    setIsLoading(true);
    refetch().then(() => {
      setIsLoading(false);
    });
  }, [refetch]);

  const handleUnenroll = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Unenroll!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .delete(`/enrolled/${email}`)
          .then((response) => {
            Swal.fire("Unenrolled!", "You have been unenrolled from the course.", "success");
            refetch(); // Refetch the data after successful unenrollment.
          })
          .catch((error) => {
            console.error(error);
            Swal.fire("Error", "Failed to unenroll. Please try again.", "error");
          });
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <ScaleLoader color="#3498db" />
        </div>
      ) : enrolled.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h2 className="text-4xl font-bold">Not Enrolled in Any Course Yet!!</h2>
        </div>
      ) : (
        <div className="px-5 min-h-[100vh] flex justify-center items-center flex-col">
          <h2 className="text-2xl pb-16 mt-28 md:text-3xl text-center font-bold">
            My Courses
          </h2>
          {enrolled.map((enroll) => (
            <div
              key={enroll._id}
              className="flex flex-col lg:mt-4 mt-20 items-center bg-white border border-gray-100 rounded-lg shadow md:flex-row md:max-w-3xl"
            >
              <img
                className="object-fit w-full rounded-t-lg md:h-[238px] md:w-[350px] md:rounded-none md:rounded-s-lg"
                src={enroll.courseImage}
                alt={enroll.courseName}
              />
              <div className="flex flex-col md:pl-[75px] justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {enroll.courseName}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                  {enroll.courseDescription}
                </p>
                <p className="mb-3 font-normal text-gray-700">
                  Instructor: {enroll.courseInstructor}
                </p>
                <div className="flex justify-between items-center">
                  <p className="mb-3 font-normal text-gray-700">
                    Duration: {enroll.courseDuration}
                  </p>
                  <button
                    onClick={() => handleUnenroll(enroll.email)}
                    className="bg-blue-400 text-sm text-white rounded-full hover:bg-blue-600 px-3 py-1.5 mb-2"
                  >
                    Unenroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyCourses;
