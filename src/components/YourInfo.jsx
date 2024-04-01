import React, { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import YourInfoOption from "./YourInfoOption";

const YourInfo = ({ currentStep, onInfoSelect, infoOptions, isInfoEmpty }) => {
  const [errorDisplay, setErrorDisplay] = useState("invisible");

  useEffect(() => {
    if (isInfoEmpty) {
      setErrorDisplay("block");
    } else {
      setErrorDisplay("invisible");
    }
  }, [isInfoEmpty]);
  return (
    <div>
      <SectionHeading
        title="Which describes you best?"
        desc="This will help us personalize your experience."
      />
      <div className="grid md:grid-rows-6 gap-2">
        {infoOptions.map((infoOption) => (
          <YourInfoOption
            onInfoSelect={onInfoSelect}
            key={infoOption.id}
            id={infoOption.id}
            logo={infoOption.logo}
            title={infoOption.title}
            additional={infoOption.additional}
            price={infoOption.price}
            selected={infoOption.selected}
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

export default YourInfo;
