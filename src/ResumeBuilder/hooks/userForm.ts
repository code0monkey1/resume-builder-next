import { ReactElement, useState } from 'react';

const useForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goTo = (step: number) => {
    setCurrentStepIndex(step);
  };

  const next = () => {
    if (currentStepIndex + 1 < steps.length)
      setCurrentStepIndex((current) => current + 1);
  };

  const back = () => {
    if (currentStepIndex > 0) setCurrentStepIndex((current) => current - 1);
  };

  return {
    currentStepIndex,
    Step: steps[currentStepIndex],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex + 1 === steps.length,
  };
};

export default useForm;
