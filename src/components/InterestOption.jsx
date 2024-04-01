import React, { useEffect, useState } from "react";

const InterestOption = ({
  id,
  logo,
  title,
  additional,
  price,
  onInterestSelect,
  selected,
}) => {
  const [bg, changeBg] = useState("");

  useEffect(() => {
    if (selected) {
      changeBg("border-[#F2B01E]");
    } else {
      changeBg("");
    }
  }, [selected]);

  return (
    <div
      onClick={() => onInterestSelect(title, price, id)}
      className={`${bg} border rounded-lg flex flex-row md:flex-col justify-start md:justify-between items-left pt-5 px-5 pr-14 cursor-pointer hover:scale-105 duration-150 focus:bg-violet-700`}
    >
      <div className="flex flex-row justify-start gap-4">
        <div className="mb-5 md:mb-0 md:mr-0 md:pb-4">
          <img src={logo} alt="Plan Option" height={30} width={30} />
        </div>
        <div className="text-[#02295a] font-medium">
          {title}
          {additional}
        </div>
      </div>
    </div>
  );
};

export default InterestOption;
