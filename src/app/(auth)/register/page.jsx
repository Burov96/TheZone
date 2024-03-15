"use client";
import { register } from "@/utils/actions";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const router = useRouter();
  const handleReg = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      // username, email, password, repass, img
      const username = formData.get("username");
      const email = formData.get("email");
      const password = formData.get("password");
      const repass = formData.get("repass");
      const image = formData.get("image");

      const res = await register(username, email, password, repass, image);

      if (res.success) {
        router.push("/");
        toast.success("Registration successful!");
      } else {
        toast.error(res.error || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during registration");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <ToastContainer />
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-xl p-8">
        <form onSubmit={handleReg} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              required
              id="username"
              type="username"
              placeholder="Username"
              name="username"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              E-mail
            </label>
            <input
              required
              id="email"
              type="email"
              placeholder="E-mail"
              name="email"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="passwordConfirm"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              required
              id="passwordConfirm"
              type="password"
              placeholder="Confirm Password"
              name="repass"
              className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="Avatar"
              className="block text-gray-700 font-semibold mb-2"
            >
              Avatar link
              <input
                type="url"
                id="image"
                name="image"
                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-sky-500"
                placeholder="i.imgur.com/dankmemes.jpg"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
