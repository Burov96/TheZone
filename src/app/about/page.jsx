import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return(
    <div className="container mx-auto px-4">
  <section className=" -z-50 -mb-60 relative h-[80svh] flex flex-col justify-center items-center">
    <div className="absolute -top-32 scale-75  2xl:scale-100 lg:-top-24">
      <Image src='/hkr.svg' alt="Logo" width={400} height={400} />
    </div>
    <header className="text-center -my-10">
      <h1 className="text-5xl font-bold mb-4">
        About Us
      </h1>
      <p className="text-2xl italic font-semibold">
        Learn more about our mission and vision.
      </p>
    </header>
  </section>

  <section className=" z-0 my-12">
    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
    <p className="text-lg text-gray-800">
We believe that studying in a friendly-comunity based enviorment, teaching one another in a way where no money are involved is the best way to learn. In addition to helping other people, submitting tutorials would benefit you in the long run. In a <Link href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6336728/' className="text-blue-500 hover:text-blue-600"> study </Link>, it was discovered that teaching is the best way to learn. Its also known as  <i>The Protégé Effect</i>.    </p>
  </section>

  <section className="my-12">
    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
    <p className="text-lg text-gray-800">
    We envision a world where knowledge flows freely and everyone has the opportunity to learn and grow. We aim to build a vibrant global community where learners support each other, sharing their expertise and expanding their understanding through collaboration.
    </p>
  </section>

  <section className="my-12">
  <h2 className="text-3xl font-bold mb-4">Our Values</h2>
  <ul className="list-disc pl-8 text-lg text-gray-800">
    <li>Value 1: Community-First Learning</li>
    <li>Value 2: Knowledge for Everyone</li>  
    <li>Value 3: Empowerment Through Teaching</li> 
  </ul>
</section>


  <section className="text-center my-12">
    <p className="text-lg text-gray-800 mb-4">Ready to join our community?</p>
    <Link href="/register">
      <button className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition duration-300">
        Sign Up Now
      </button>
    </Link>
  </section>
</div>
  )
};

export default Home;