'use client';

import useForm from '@/src/ResumeBuilder/hooks/userForm';
import Form1 from '@/src/components/Form1';
import Form2 from '@/src/components/Form2';
import Form3 from '@/src/components/Form3';
import { ReactEventHandler } from 'react';

const Form = () => {
  const {
    currentStepIndex,
    back,
    goTo,
    next,
    Step,
    steps,
    isFirstStep,
    isLastStep,
  } = useForm([
    <div key="1">
      <h1>
        <Form1 />
      </h1>
    </div>,
    <div key="2">
      <h1>
        <Form2 />
      </h1>
    </div>,
    <div key="2">
      <Form3 />
    </div>,
  ]);
  
  const onSubmit=(e:)=>{
    
  }
  return (
    <div className="relative border border-solid border-black p-8 m-4 rounded-md font-mono">
      <form>
        <div className="absolute top-2 right-2 ">
          {currentStepIndex + 1}/{steps.length}
        </div>
        <div>{Step}</div>
        <div className="mt-4 flex gap-2 justify-end">
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="
           rounded-md p-2 border"
            >
              Back
            </button>
          )}
          {
            <button
              type="button"
              onClick={()=>next}
              className="
           rounded-md p-2 border"
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          }
        </div>
      </form>
    </div>
  );
};
export default Form;
