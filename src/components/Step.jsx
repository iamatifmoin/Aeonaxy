import React, { useEffect, useState } from "react";

const Step = ({ number, title, active }) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (active) setBg("bg-[#54AC95]");
    else setBg("");
  }, [active]);

  return (
    <div className="flex text-left space-x-7 text-black">
      <div
        className={`font-bold border border-[#E5E7EB] p-2 ${bg} text-center w-10 h-10 rounded-full`}
      >
        {number}
      </div>
    </div>
  );
};

export default Step;
