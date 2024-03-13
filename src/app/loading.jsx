"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";

function Loading() {
  return (
    <div className="flex justify-center content-center">
      <DotLottiePlayer src="/shame.lottie" autoplay loop></DotLottiePlayer>
    </div>
  );
}

export default Loading;
