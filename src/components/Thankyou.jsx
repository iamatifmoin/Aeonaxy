import React from "react";
import thankyouIcon from "../assets/images/icon-thank-you.svg";
import star from "../assets/images/star-solid.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-start space-y-5 text-left mt-12">
      <div>
        <img src={thankyouIcon} alt="Thank you" />
      </div>
      <div className="font-bold text-[#02295a] text-3xl">
        You're on your way!
      </div>
      <p className="pb-24 text-[#9699ab] text-[14px] w-96">
        <span className="flex flex-row gap-2 mb-4">
          <img src={star} height={40} width={40} />
          <img src={star} height={40} width={40} />
          <img src={star} height={40} width={40} />
          <img src={star} height={40} width={40} />
          <img src={star} height={40} width={40} />
        </span>
        <i>
          "Through its engaging and well-structured courses, Brilliant has
          taught me mathematical concepts that I previously struggled to
          understand. I now feel confident approaching both technical job
          interviews and real world problem solving situations."
          <br />
          <br />- Jacob S.
        </i>
      </p>
    </div>
  );
};

export default Thankyou;
