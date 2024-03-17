'use server'
import { FaGithub } from "react-icons/fa";
import LoginForm from '@/components/auth/LoginForm'
import { handleGithubLogin } from "@/utils/actions";

function LoginPage() {

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
                <FaGithub className="mr-2 size-6" /> Sign in with GitHub
              </button>
            </div>
            <div className="flex items-center justify-center my-4">
              <hr className="w-1/2 mx-2 text-gray-400" />
              <span className="text-gray-500">or</span>
              <hr className="w-1/2 mx-2 text-gray-400" />
            </div>
          </form>
    <LoginForm />
                
    </div>
    </div>
  </div>
</section>
  )

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
