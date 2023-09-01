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
    <div>
      <form
        style={{ height: '90vh', margin: '0.2rem' }}
        className="border rounded-sm p-6"
      >
        <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
          {' '}
          <h1 className="text-4xl">
            {' '}
            {currentStepIndex + 1}/{steps.length}{' '}
          </h1>
        </div>
      </form>
    </div>
  );
};
export default Form;
