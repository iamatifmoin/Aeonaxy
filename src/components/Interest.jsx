import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import InterestOption from "./InterestOption";

const Interest = ({
  currentStep,
  onInterestSelect,
  interestOptions,
  isInterestEmpty,
}) => {
  const [errorDisplay, setErrorDisplay] = useState("invisible");

  useEffect(() => {
    if (isInterestEmpty) {
      setErrorDisplay("block");
    } else {
      setErrorDisplay("invisible");
    }
  }, [isInterestEmpty]);
  return (
    <div>
      <SectionHeading
        title="Which are you most interested in?"
        desc="Choose just one. This will help us get you started (but won't limit your experience)."
      />
      <div className="grid md:grid-rows-5 gap-2">
        {interestOptions.map((interestOption) => (
          <InterestOption
            onInterestSelect={onInterestSelect}
            key={interestOption.id}
            id={interestOption.id}
            logo={interestOption.logo}
            title={interestOption.title}
            additional={interestOption.additional}
            price={interestOption.price}
            selected={interestOption.selected}
          />
        ))}
      </div>
      <div
        className={`${errorDisplay} font-medium text-[#ed3548] mt-5 text-center`}
      >
        Please select an option!
      </div>
    </div>
  );
};

export default Interest;
