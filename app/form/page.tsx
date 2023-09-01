'use client';

import useForm from '@/src/ResumeBuilder/hooks/userForm';
import Form1 from '@/src/components/Form1';
import Form2 from '@/src/components/Form2';

const Form = () => {
  const { currentStepIndex, back, goTo, next, Step, steps } = useForm([
    <div key="1">
      <h1>Hello</h1>
    </div>,
    <div key="2">
      <h1>There</h1>
    </div>,
  ]);

  return (
    <div className="relative bg-white border border-solid border-black p-8 m-4 rounded-md font-mono">
      <form>
        <div className="absolute">{Step}</div>
      </form>
    </div>
  );
};
export default Form;
