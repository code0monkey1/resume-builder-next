'use client';

import useForm from '@/src/ResumeBuilder/hooks/userForm';
import Form1 from '@/src/components/Form1';
import Form2 from '@/src/components/Form2';

const Form = () => {
  const { currentStepIndex, back, goTo, next, Step, steps } = useForm([
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
      <h1>There</h1>
    </div>,
  ]);

  return (
    <div className="relative bg-white border border-solid border-black p-8 m-4 rounded-md font-mono">
      FORM
      <form>
        <div className="absolute top-2 right-2 ">
          {currentStepIndex + 1}/{steps.length}
        </div>
        <div className="mt-4 flex gap-2 justify-end">
          {currentStepIndex !== 0 && (
            <button
              type="button"
              onClick={back}
              className="border
           rounded-md p-2 bg-gray-100 border-black border-solid"
            >
              Back
            </button>
          )}
          {currentStepIndex + 1 !== steps.length && (
            <button
              type="button"
              onClick={next}
              className="border
           rounded-md p-2 bg-gray-100 border-black border-solid"
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default Form;
