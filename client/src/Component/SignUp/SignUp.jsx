import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../../firebase/firebase.config";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const SignUp = () => {
  window.scrollTo(0, 0);
  const {createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const auth = getAuth(app);
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    console.log(data);

    const tostId = toast.loading("Account Created Successfully");
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: data.name,
        }).then((result) => {
          const userDetails = {
            name: data.name,
            email: data.email,
          };

          axiosSecure.post("/allUser", userDetails).then((res) => {
            if(res.data.insertedId) {
              toast.success("Account Created Successfully", { id: tostId });
              navigate(location.state ? location.state : "/");
            }
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section class=" pt-10  w-full">
        <div class="flex flex-col items-center py-10 justify-center px-6  mx-auto md:h-screen lg:mt-[-64px] w-[100%] lg:w-[80%]">
          <div class="w-full bg-white rounded-lg shadow-md md:mt-0 sm:max-w-md xl:p-0  ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-6">
              <h1 class=" font-bold leading-tight tracking-tight text-gray-900 text-2xl md:text-3xl text-center ">
                SignUp
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                class="space-y-4 md:space-y-4"
              >
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    id="name"
                    class="outline-none border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="john"
                  />
                  {errors.name?.type === "required" && (
                    <p className=" py-1 text-red-500">name is required</p>
                  )}
                </div>

                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    id="email"
                    class="outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@xxx.com"
                  />
                  {errors.email?.type === "required" && (
                    <p className=" py-1 text-red-500">email is required</p>
                  )}
                </div>

                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  />
                  {errors.password?.type === "pattern" && (
                    <p className=" text-red-500 pt-2">
                      password must have one lower case one upper case one
                      number and one special character{" "}
                    </p>
                  )}
                </div>

                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 "
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="terms" class="font-light text-gray-700 ">
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline "
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Create Account
                </button>
                <div className=" space-y-2 lg:py-1">
                  <p class="text-sm font-light text-gray-700 ">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      class="font-medium text-gray-800 hover:underline dark:text-primary-500"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
