import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { IoSyncCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { setCookie } from "../../api/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  console.log(from);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // create user
    try {
      await signIn(data?.email, data?.password);
      toast.success("User logged in successfully");

      // set cookie
      await setCookie(data?.email);
      // console.log(data);
      setLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Error from Login function");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-rose-300 to-red-300 flex flex-col items-center justify-center">
      <div className="shadow-xl shadow-rose-700 w-4/5 md:w-3/4 lg:max-w-screen-md my-12  md:mx-auto p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                {...register("password")}
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 font-semibold text-white flex justify-center items-center"
            >
              {loading ? (
                <IoSyncCircleOutline className="animate-spin text-white text-3xl" />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-400 my-3">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
