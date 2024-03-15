'use client'
// 'use server'
import {  handleLogin } from "@/utils/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function LoginForm() {
    // const [state, formAction] = useFormState(handleLogin, undefined);
    const router = useRouter();
    const login = async (e) => {
      e.preventDefault(); 
  
      try {
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const res = await handleLogin(username, password); 
        console.log('handleLogin result:', res); //handleLogin result:undefined
        if (res?.success) {
          console.log('reached the part where im all good')
          router.push("/");
          toast.success('Login successful!');
        } else {
          toast.error(res.error || 'Login failed');
        }
      } catch (error) {
      console.log("the error is"+ error);
        toast.error('An error occurred during login');
      }
    };
  return (


    <form class="space-y-4 md:space-y-6" onSubmit={login} >
      <ToastContainer />
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your username
                </label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Johnson123"
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
                onClick={()=>toast.warn("Well, too bad, functionality for this comming soon.")}
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                  Forgot password?
                </a>
              </div>
              <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
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
              </p>
              {/* {state.error? toast.error(state.error):state.success?toast.success(state.success):null} */}
            </form>

  );
}

export default LoginForm;
