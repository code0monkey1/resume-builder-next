'use client';

import useForm from '@/src/ResumeBuilder/hooks/userForm';
import Form1 from '@/src/components/Form1';
import Form2 from '@/src/components/Form2';

const Form = () => {
  const { currentStepIndex, back, goTo, next, Step, steps } = useForm([
    <div key="1">
      <Form1 />
    </div>,
    <div key="2">
      <Form2 />
    </div>,
  ]);

  return (
    <>
      <form className="flex justify-center h-full  ">
        <div className="text-4xl w-full">
          <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
            {currentStepIndex + 1}/{steps.length}
          </div>
          <div>{Step}</div>
        </div>
        <div className="flex gap-2 justify-center w-full  ">
          <button
            className="border border-spacing-2 rounded-2xl p-2 "
            onClick={next}
          >
            Next
          </button>
          <button
            className="border  border-spacing-2 rounded-2xl p-2 "
            onClick={back}
          >
            Previous
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
