import Image from "next/image";
import img from "../../public/hkr.svg";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { selectTheme } from "@/store/themeSlice";

const Home = () => {
  console.log();
  return (
    <div className="container mx-auto py-8 px-4">
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      <section className="-mb-44 relative h-screen flex flex-col justify-center items-center">
        <div className="absolute -top-32 scale-75  2xl:scale-100 lg:-top-24">
          <Image src={img} alt="Logo" width={400} height={400} />
        </div>
        <header className="text-center mt-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to The Zone</h1>
          <p className="text-2xl italic font-semibold">
            Explore and learn from our community-driven tutorials.
          </p>
        </header>
      </section>

      <section className="px-4 my-12 self-center">
        <h2 className="text-2xl font-bold mb-4">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg shadow-sm hover:shadow-xl transition duration-300 shadow-slate-950 p-4">
            <h3 className="text-lg font-semibold mb-2">Technology</h3>
            <p className="">
              Explore tutorials on the latest technologies and tools.
            </p>
            <Link href="/categories/technology">
              <h3 className="hover:underline mt-2">
                Explore Technology Tutorials
              </h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 my-12 ">
        <h2 className="text-2xl font-bold mb-4">Latest Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg hover:shadow-xl transition duration-300 shadow-sm  shadow-slate-950 p-4 ">
            <h3 className="text-lg font-semibold mb-2">
              Getting Started with React
            </h3>
            <p className="">
              Learn the basics of React.js and build your first app.
            </p>
            <Link href="/tutorials/">
              <h3 className="hover:underline mt-2">Read More</h3>
            </Link>
          </div>

          <div className="rounded-lg shadow-sm hover:shadow-xl transition duration-300 shadow-slate-950 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Getting Started with Next
            </h3>
            <p className="">
              Learn the basics of Next.js and build your first app.
            </p>
            <Link href="/tutorials/">
              <h3 className="hover:underline mt-2">Read More</h3>
            </Link>
          </div>
          <div className="rounded-lg shadow-sm hover:shadow-xl transition duration-300 shadow-slate-950 p-4">
            <h3 className="text-lg font-semibold mb-2">
              Getting Started with TailwindCSS
            </h3>
            <p className="">
              Learn the basics of styling with the smoothest and coolest CSS
              framework ever. Remember, once you go Tailiwnd theres no going
              back!
            </p>
            <Link href="/tutorials/">
              <h3 className="hover:underline mt-2">Read More</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 my-12 ">
        <h2 className="text-2xl font-bold mb-4">Free time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg hover:shadow-xl transition duration-300 shadow-sm  shadow-slate-950 p-4 ">
            <h3 className="text-lg font-semibold mb-2">Meme lounge</h3>
            <p className="">Spend some time with us and enjoy some memes 🍵.</p>
            <Link href="/memes/">
              <h3 className="hover:underline mt-2">Dive in!</h3>
            </Link>
          </div>

          <div className="rounded-lg shadow-sm hover:shadow-xl transition duration-300 shadow-slate-950 p-4">
            <h3 className="text-lg font-semibold mb-2">AI Generated gems 💎</h3>
            <p className="">
              Show off the result of your genious prompt you came up with!
            </p>
            <Link href="/generated/">
              <h3 className="hover:underline mt-2">Dive in!</h3>
            </Link>
          </div>
          <div className="rounded-lg shadow-sm hover:shadow-xl transition duration-300 shadow-slate-950 p-4">
            <h3 className="text-lg font-semibold mb-2">Story time</h3>
            <p className="">
{              "Share what's on your mind, what went down today / this week!"
}            </p>
            <Link href="/stories/">
              <h3 className="hover:underline mt-2">Read More</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="my-12">
        <p className="text-center">
          The Zone is a community-driven platform where users can share their
          knowledge and learn from others. Our mission is to empower individuals
          through education and collaboration.
        </p>
      </section>

      <section className="text-center my-12">
        <p className="text-lg mb-4">
          Ready to start learning? Join our community today!
        </p>
        <Link href="/signup">
          <h3 className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-2xl shadow-slate-950 hover:bg-blue-600 transition duration-300">
            Sign Up Now
          </h3>
        </Link>
      </section>
    </div>
  );
};

export default Home;
