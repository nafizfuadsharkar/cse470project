import  { useContext, useState } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const Login = () => {
  window.scrollTo(0, 0);
  const { user, signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.value.email;
    const password = form.value.password;

    setError("");
    const toastId = toast.loading("Login Successful");
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Login Successful", { id: toastId });
        setTimeout(() => {
          navigate(location.state ? location.state : "/");
        }, 1700);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogin = () => {
    const toastId = toast.loading("Login Successful");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        const userDetails = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic.post("/allUser", userDetails)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                toast.success("Sign In Successful", {id : toastId})
                navigate("/")
            }
            else{
                toast.success("Sign In Successful", {id : toastId})
                navigate("/") 
            }
        })
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="">
      <section className=" h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-10 mx-auto md:h-screen lg:py-20 w-full lg:w-[90%]">
          <div className="w-[95%] bg-white rounded-lg shadow-md  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl text-center font-bold leading-tight tracking-tight pb-3 text-gray-900 md:text-3xl ">
                Login
              </h1>
              <form onSubmit={handleLogin} className="space-y-4 md:space-y-4">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className=" outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>

                <div className=" flex items-center w-full gap-4">
                  <div className=" border w-44 border-gray-300"></div>
                  <div className="text-xl font-medium">or</div>
                  <div className=" border w-44 border-gray-300"></div>
                </div>

                <div className=" space-y-1 lg:py-1">
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className=" inline-flex w-full items-center justify-center rounded-md   text-gray-700  border-gray-400  px-3.5 py-2.5 font-semibold transition-all duration-200 bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  >
                    <span className="mr-2 inline-block">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                      </svg>
                    </span>
                    Login with Google
                  </button>
                </div>
                <p className="text-sm font-light text-gray-600 ">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signUp"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
