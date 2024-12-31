import { useWindowSize } from "@react-hook/window-size";
import React from "react";

import Confetti from "react-confetti";
import { Link } from "react-router-dom";

const SuccesfulPayment = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <div className=" h-screen flex flex-col gap-10 justify-center items-center ">
        <h2 className=" text-4xl lg:text-5xl font-bold">✅ Payment Successful </h2>
        <Link className=" py-2 px-4 font-bold text-white bg-blue-500 rounded-md" to="/">Go Home</Link>
      </div>
      <Confetti width={width} height={height} />
    </div>
  );
};

export default SuccesfulPayment;
