import React, { useState, useEffect } from "react";
import PlanOption from "./PlanOption";
import SectionHeading from "./SectionHeading";

const Plan = ({ currentStep, onPlanSelect, planOptions, isPlanEmpty }) => {
  const [errorDisplay, setErrorDisplay] = useState("invisible");

  useEffect(() => {
    if (isPlanEmpty) {
      setErrorDisplay("block");
    } else {
      setErrorDisplay("invisible");
    }
  }, [isPlanEmpty]);

  return (
    <div>
      <SectionHeading
        title="What is your math comfort level?"
        desc="Choose the highest level you feel confident in - you can always adjust later."
      />
      <div className="grid md:grid-cols-3 md:grid-rows-1 gap-4">
        {planOptions.map((planOption) => (
          <PlanOption
            onPlanSelect={onPlanSelect}
            key={planOption.id}
            id={planOption.id}
            logo={planOption.logo}
            title={planOption.title}
            additional={planOption.additional}
            price={planOption.price}
            selected={planOption.selected}
          />
        ))}
      </div>
      <div
        className={`${errorDisplay} font-medium text-[#ed3548] mt-5 text-center`}
      >
        Please select a plan!
      </div>
    </div>
  );
};

export default Plan;
