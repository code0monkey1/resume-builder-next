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
      <h1 className="flex justify-center text-4xl p-4">
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        <form>{Step}</form>
      </h1>
      <div className="flex justify-center gap-2  ">
        <button
          className=" border p-2 border-spacing-2 rounded-2xl "
          onClick={next}
        >
          Next
        </button>
        <button
          className=" border p-2 border-spacing-2 rounded-2xl "
          onClick={back}
        >
          Previous
        </button>
      </div>
    </>
  );
};
export default Form;
