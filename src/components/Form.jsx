import React, { useEffect, useState } from "react";
import YourInfo from "./YourInfo";
import Plan from "./Plan";
import Step from "./Step";
import Thankyou from "./Thankyou";

import studentLogo from "../assets/images/icon-student.svg";
import advancedLogo from "../assets/images/icon-advanced.svg";
import proLogo from "../assets/images/icon-pro.svg";
import Interest from "./Interest";
import AlmostThere from "./AlmostThere";

const Form = () => {
  const [stepNumber, setStepNumber] = useState(() => 1);
  const [goBackVisible, setGoBackVisible] = useState("invisible");
  const [steps, setSteps] = useState([
    { id: 1, title: "YOUR INFO", active: true },
    { id: 2, title: "INTERESTS", active: false },
    { id: 3, title: "ALMOST THERE", active: false },
    { id: 4, title: "MATH LEVEL", active: false },
  ]);

  const [isPlanEmpty, setIsPlanEmpty] = useState(false);
  const [isInfoEmpty, setIsInfoEmpty] = useState(false);
  const [isInterestEmpty, setIsInterestEmpty] = useState(false);

  const [plan, setPlan] = useState({
    title: "",
    price: 0,
    yearly: false,
  });

  const [info, setInfo] = useState({
    title: "",
    price: 0,
    yearly: false,
  });
  const [interest, setInterest] = useState({
    title: "",
    price: 0,
    yearly: false,
  });

  const [infoOptions, setInfoOptions] = useState([
    {
      id: 1,
      logo: studentLogo,
      title: "Student",
      additional: " or soon to be enrolled",
      selected: false,
    },
    {
      id: 2,
      logo: advancedLogo,
      title: "Professional",
      additional: " pursuing a career",
      selected: false,
    },
    {
      id: 3,
      logo: proLogo,
      title: "Parent",
      additional: " of a school-age child",
      selected: false,
    },
    {
      id: 4,
      logo: advancedLogo,
      title: "Lifelong Learner",
      additional: "",
      selected: false,
    },
    {
      id: 5,
      logo: proLogo,
      title: "Teacher",
      additional: "",
      selected: false,
    },
    {
      id: 6,
      logo: advancedLogo,
      title: "Other",
      additional: "",
      selected: false,
    },
  ]);
  const [interestOptions, setInterestOptions] = useState([
    {
      id: 1,
      logo: studentLogo,
      title: "Learning specific skills to enhance my career",
      additional: "",
      selected: false,
    },
    {
      id: 2,
      logo: advancedLogo,
      title: "Exploring new topics I'm interested in",
      additional: "",
      selected: false,
    },
    {
      id: 3,
      logo: proLogo,
      title: "Refreshing my math foundations",
      additional: "",
      selected: false,
    },
    {
      id: 4,
      logo: advancedLogo,
      title: "Exercising my brain to stay sharp",
      additional: "",
      selected: false,
    },
    {
      id: 5,
      logo: proLogo,
      title: "Something else",
      additional: "",
      selected: false,
    },
  ]);

  const [planOptions, setPlanOptions] = useState([
    {
      id: 1,
      logo: studentLogo,
      title: "Arithmetic",
      additional: "Introductory",
      selected: false,
    },
    {
      id: 2,
      logo: proLogo,
      title: "Intermediate Algebra",
      additional: "Intermediate",
      selected: false,
    },
    {
      id: 3,
      logo: advancedLogo,
      title: "Calculus",
      additional: "Advanced",
      selected: false,
    },
  ]);

  const [displayThankyou, setDisplayThankyou] = useState(false);

  useEffect(() => {
    setSteps((prevSteps) => {
      const updatedSteps = prevSteps.map((step) => {
        if (step.id === stepNumber) {
          return { ...step, active: true };
        } else {
          return { ...step, active: false };
        }
      });
      return updatedSteps;
    });
    if (stepNumber > 1) {
      setGoBackVisible("visible");
    } else {
      setGoBackVisible("invisible");
    }
  }, [
    stepNumber,
    info,
    plan,
    interest,
    infoOptions,
    interestOptions,
    planOptions,
    isPlanEmpty,
    displayThankyou,
  ]);

  const nextStep = () => {
    if (stepNumber == 1) {
      if (info.title.length == 0) {
        setIsInfoEmpty(true);
        return;
      } else {
        setIsInfoEmpty(false);
      }
    }

    if (stepNumber == 2) {
      if (interest.title.length == 0) {
        setIsInterestEmpty(true);
        return;
      } else {
        setIsInterestEmpty(false);
      }
    }

    if (stepNumber == 4) {
      if (plan.title.length == 0) {
        setIsPlanEmpty(true);
        return;
      } else {
        setIsPlanEmpty(false);
      }
    }

    setStepNumber((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStepNumber((prevStep) => prevStep - 1);
  };

  const changeClick = () => {
    setStepNumber((prevStep) => prevStep - 2);
  };

  const selectPlan = (title, price, id) => {
    setPlanOptions((prevPlanOptions) => {
      const updatedPlanOptions = prevPlanOptions.map((planOption) => {
        if (planOption.id == id) {
          return { ...planOption, selected: true };
        } else {
          return { ...planOption, selected: false };
        }
      });
      return updatedPlanOptions;
    });

    setPlan((prevPlan) => {
      return { ...prevPlan, title: title, price: price };
    });
  };

  const selectInterest = (title, price, id) => {
    setInterestOptions((prevPlanOptions) => {
      const updatedPlanOptions = prevPlanOptions.map((planOption) => {
        if (planOption.id == id) {
          return { ...planOption, selected: true };
        } else {
          return { ...planOption, selected: false };
        }
      });
      return updatedPlanOptions;
    });

    setInterest((prevPlan) => {
      return { ...prevPlan, title: title };
    });
  };

  const selectInfo = (title, price, id) => {
    setInfoOptions((prevInfoOptions) => {
      const updatedInfoOptions = prevInfoOptions.map((infoOption) => {
        if (infoOption.id == id) {
          return { ...infoOption, selected: true };
        } else {
          return { ...infoOption, selected: false };
        }
      });
      return updatedInfoOptions;
    });

    setInfo((prevInfo) => {
      return { ...prevInfo, title: title };
    });
  };

  return (
    <div className="container">
      <div className="flex justify-center mt-8 inset-0 space-x-10 md:mt-0 md:pl-6 md:pt-8">
        {steps.map((step) => (
          <Step
            key={step.id}
            number={step.id}
            title={step.title}
            active={step.active}
          />
        ))}
      </div>
      <div className="bg-white rounded-xl md:p-3 md:flex justify-center">
        <div className="flex flex-col justify-between xl:w-[550px] w-[480px] md:static rounded-2xl px-12 pt-10 pb-16 bg-white md:px-0 md:mx-28 md:w-100">
          {(displayThankyou && (
            <>
              <Thankyou />
            </>
          )) || (
            <>
              <div>
                {(stepNumber === 1 && (
                  <YourInfo
                    onInfoSelect={selectInfo}
                    currentStep={stepNumber}
                    infoOptions={infoOptions}
                    isInfoEmpty={isInfoEmpty}
                  />
                )) ||
                  (stepNumber === 2 && (
                    <Interest
                      onInterestSelect={selectInterest}
                      currentStep={stepNumber}
                      interestOptions={interestOptions}
                      isInterestEmpty={isInterestEmpty}
                    />
                  )) ||
                  (stepNumber === 3 && <AlmostThere />) ||
                  (stepNumber === 4 && (
                    <Plan
                      onPlanSelect={selectPlan}
                      currentStep={stepNumber}
                      planOptions={planOptions}
                      isPlanEmpty={isPlanEmpty}
                    />
                  ))}
              </div>
              <div className="flex justify-between fixed px-16 bottom-0 left-0 w-full bg-white p-5 md:static md:p-0 items-center w-[700px]]">
                <div
                  onClick={prevStep}
                  className={`font-medium text-[#9699ab] select-none cursor-pointer transition duration-100 hover:text-[#02295a] ${goBackVisible}`}
                >
                  Go back
                </div>
                {stepNumber === 4 ? (
                  <div
                    onClick={() => setDisplayThankyou(true)}
                    className="font-medium bg-[#000000] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Confirm
                  </div>
                ) : (
                  <div
                    onClick={nextStep}
                    className="font-medium bg-[#000000] select-none text-white py-3 px-5 rounded-lg cursor-pointer transition duration-100 hover:opacity-90"
                  >
                    Continue
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
