import React from "react";
import thankyouIcon from "../assets/images/icon-thank-you.svg";

const AlmostThere = () => {
  return (
    <div className="flex flex-col justify-center items-start space-y-5 text-left mt-12">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">
        You're in the right place
      </div>
      <p className="pb-24 text-[#9699ab] text-[14px] w-96">
        Brilliant gets you hands-on to help improve your professional skills and
        knowledge. You'll interact with concepts and solve fun problems in math,
        science, and computer science.
      </p>
    </div>
  );
};

export default AlmostThere;
