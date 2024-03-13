'use client'
import  { useRef, useState } from 'react';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import emailjs from 'emailjs-com';
import { DotLottiePlayer } from '@dotlottie/react-player';
// import UseAnimations from 'react-useanimations';
// import loading2 from 'react-useanimations/lib/loading2'
// import facebook from 'react-useanimations/lib/facebook'
// import linkedin from 'react-useanimations/lib/linkedin'
// import instagram from 'react-useanimations/lib/instagram'


const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  console.log('This form will send me an email. Upon receiving, i will get back right to you!');

  const validateForm = (formData) => {
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
      toast.error('Please enter a valid name');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!message || message.length === 0 || message.length > 1500) {
      toast.error('Please enter a message (1-1500 characters)');
      return false;
    }
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault()
    const formData = new FormData(form.current);

    if (!validateForm(formData)) {
      return;
    }
    setLoading(true)
    try {
      await emailjs.sendForm('service_75exmfy', 'template_slkka6p', form.current, 'bQIU52wz8bE7SMb3-');
      toast.success('Thank you for your message. I will get back to you as soon as possible.',{autoClose: 1200,});
      form.current.reset();
    } catch (error) {
      toast.error('Something went wrong');
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false); 
      }, 3000);}
  };

  return (
    <div className="container mx-auto py-8 px-4">
              <ToastContainer />
      <section className="my-12">
        <h2 className="text-center text-3xl font-bold mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block  text-lg mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className=" text-gray-950 text-2xl  w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              name="user_name" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block  text-lg mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="text-gray-950 text-2xl w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              type="email" name="user_email"
              id="email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block  text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="text-gray-950 text-2xl w-full px-4 py-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              id="message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button onClick={sendEmail}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md transition-all"
              type="submit"
            >
                          {!loading ? 'Send Message' : <DotLottiePlayer src="/sending.lottie" loop={false} autoplay style={{height:"100px", scale:"1.95", width:"auto"}}/>}

            </button>
          </div>
        </form>
      </section>

      <section className=" text-center my-12">
        <h2 className="text-3xl font-bold mb-4">Creator Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="">Peshtera, Bulgaria</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="">+359 88783 1660</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="">burov96@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center items-center space-x-4">
              <Link href="https://www.facebook.com/hatersplease/" className=" hover:text-blue-500">
                <DotLottiePlayer src='/fb.lottie' loop hover style={{width:"42px"}}/>
              </Link>
              <Link href="https://www.linkedin.com/in/teodor-burov-b5ba12bb/" className=" hover:text-blue-500">
                <DotLottiePlayer src='/in.lottie' loop hover style={{width:"46px"}}/>
              </Link>
              <Link href="https://www.instagram.com/da_dobbie/" className=" hover:text-blue-500">
                <DotLottiePlayer src='/ig.lottie' loop hover style={{width:"42px"}}/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
