import { handleGithubLogin, handleLogin } from "@/utils/actions";
import { auth, signIn } from "@/utils/auth";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

async function LoginPage() {
  return (
    <section class="mx-3 rounded-lg md:rounded-none md:mx-auto bg-gray-50 dark:bg-gray-900 select-none">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form action={handleGithubLogin}>
              <div className=" grid items-center justify-center  gap-2 ">
                <button class="flex my-2 border border-gray-500 hover:bg-gray-700 hover:text-white text-gray-300 font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ">
                <FaGithub className="mr-2 size-6"/> Sign in with GitHub 
                </button>
              </div>
                <div className="flex items-center justify-center my-4">
                  <hr className="w-1/2 mx-2 text-gray-400" />
                  <span className="text-gray-500">or</span>
                  <hr className="w-1/2 mx-2 text-gray-400" />
                </div>
            </form>
            <form class="space-y-4 md:space-y-6" action={handleLogin}>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required={false}
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button class="w-full bg-blue-500 hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Sign in
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                {/* <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"> */}
                <Link
                  href="/register"
                  class="font-semibold text-primary-600 hover:underline dark:text-primary-500"
                >
                  {" "}
                  Sign up
                </Link>
                {/* </button> */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;

{
  /* <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={handleLogin}>
        <input type="text" placeholder="email" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login</button>
      </form>
    </div> */
}
