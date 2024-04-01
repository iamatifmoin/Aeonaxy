import React, { useEffect, useState } from "react";

const PlanOption = ({
  id,
  logo,
  title,
  additional,
  price,
  onPlanSelect,
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
      onClick={() => onPlanSelect(title, price, id)}
      className={`${bg} border rounded-lg flex flex-row md:flex-col justify-start md:justify-between items-left pt-5 px-5 pr-14 cursor-pointer hover:scale-105 duration-150 focus:bg-violet-700`}
    >
      <div className="mb-5 md:mb-10 mr-10 md:mr-0">
        <img src={logo} alt="Plan Option" height={30} width={30} />
      </div>
      <div>
        <div className="text-[#02295a] font-medium">{title}</div>
        <div className="text-[14px] text-[#9699ab] mb-3">{additional}</div>
      </div>
    </div>
  );
};

export default PlanOption;
