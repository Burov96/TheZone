"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";

function NotFound() {
  return (
    <div className="h-full w-full flex justify-center items-center ">
      <DotLottiePlayer
        src="/404.lottie"
        loop
        autoplay
      ></DotLottiePlayer>
    </div>
  );
}

export default NotFound;
