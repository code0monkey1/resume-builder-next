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
        <div style={{ position: 'absolute', top: '.5', right: '.5' }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        <form>{Step}</form>
      </h1>
      <button onClick={next}>Next</button>
      <button onClick={back}>Previous</button>
    </>
  );
};
export default Form;
