import React, { useContext, useState } from "react";
import { FaStream } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setNav(!nav);
  };

  const handleLogOut = () => {

    const toastId = toast.loading("Logout Successful")
    logOut()
    .then((result) => {
      toast.success("Logout Successful", {id : toastId})
      setTimeout(() => {
        navigate("/");
      }, 1500)
     
    });
  };

  return (
    <div className="z-50 bg-white fixed w-full  h-[73px] shadow md:px-6 lg:px-16 xl:px-32 px-4  flex justify-between items-center">
      <h2 className="  text-2xl sm:text-3xl font-bold text-gray-900  ">
        <NavLink className="flex items-center" to="/"> <span className="pb-2"><img className="w-10" src="https://lirp.cdn-website.com/65cebca4/dms3rep/multi/opt/2-640w.png" alt="" /></span>SkillForge</NavLink>
      </h2>

      <ul className="hidden lg:flex tracking-wide text-gray-700 text-base  space-x-6 items-center ">
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "text-blue-600 font-medium" : ""}`} to="/">Home</NavLink>
        </li>
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "text-blue-600 font-medium" : ""}`} to="/aboutUs">About Us</NavLink>
        </li>
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "text-blue-600 font-medium" : ""}`} to="/course">Course</NavLink>
        </li>
        <li className="pt-1 cursor-pointer hover:text-blue-600">
          <NavLink className={({isActive}) => `${isActive ? "text-blue-600 font-medium" : ""}`} to="/contact">Contact Us</NavLink>
        </li>

        <li>
          <div className="hidden lg:flex items-center mt-1">
            {user?.email ? (
              <div className="flex transition-all duration-700 ease-in-out  items-center">
                <details className="dropdown dropdown-end">
                  <summary className="m-1 btn bg-white ">
                    <div className="flex items-center gap-2">
                      <img
                        className=" w-4"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png"
                        alt=""
                      />
                      <p>{user.displayName}</p>
                    </div>
                  </summary>
                  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li>
                      <Link to="/enrolled">My Courses</Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>Logout</button>
                    </li>
                  </ul>
                </details>
              </div>
            ) : (
              <Link
                to="/login"
                class=" bg-blue-600 rounded-full hover:bg-blue-700 duration-500 ease-in-out transition-all   px-4 py-2  text-white"
              >
                Login
              </Link>
            )}
          </div>
        </li>
      </ul>
      <div className=" lg:hidden flex  text-gray-800">
        <div className="">
          {!isOpen ? (
            <span onClick={() => setOpen(!isOpen)}>
              <FaStream />
            </span>
          ) : (
            <div
              onClick={() => setOpen(!isOpen)}
              className="  text-xl  py-7 flex justify-end items-center"
            >
              <RxCross2 className="z-10" />
            </div>
          )}

          <div
            className={`top-0 text-gray-800 bg-gray-50 right-0 absolute   w-[70vw] h-full  ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ease-in-out duration-500`}
          >
            <ul className="md:h-[100vh] bg-gray-50 h-[100vh] p-10 py-32 flex flex-col gap-6 justify-center items-center">
              {user && <>
                <p className=" font-bold text-lg pb-4">{user.displayName}</p>
                <Link className=" text-xl" to="/enrolled">My Courses</Link>
              </> }
              <li onClick={handleClick} className=" text-xl cursor-pointer hover:text-blue-600">
                <Link to="/">Home</Link>
              </li>
              <li onClick={handleClick} className=" text-xl cursor-pointer hover:text-blue-600">
                
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li onClick={handleClick} className=" text-xl cursor-pointer hover:text-blue-600">
                <Link to="/course">Course</Link>
              </li>
              <li onClick={handleClick} className=" text-xl cursor-pointer hover:text-blue-600">
                <Link to="contact">Contact Us</Link>
              </li>

              <li>
                {user ? (
                  <button className=" border-2 mt-2 py-2 shadow-lg px-4 rounded-2xl border-blue-600" onClick={handleLogOut}>Logout</button>
                ) : (
                  <div className="  text-xl text-gray-800">
                    <Link to="/login">Login</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;