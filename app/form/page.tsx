'use client';

import useForm from '@/src/ResumeBuilder/hooks/userForm';
import Form1 from '@/src/components/Form1';
import Form2 from '@/src/components/Form2';
import Form3 from '@/src/components/Form3';
import { FormEvent, useState } from 'react';

const INITIAL_DATA = {
  firstName: 'first name',
  lastName: 'last name',
  age: '29',
  street: '',
  city: '',
  state: '',
  zip: '',
  password: '',
  email: '',
};

export type InitialData = typeof INITIAL_DATA;

const Form = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const updateField = (fields: Partial<InitialData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
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
        <Form1 {...data} updateField={updateField} />
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

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();

    // can submit form to DB
    alert('submitted form');
  };
  return (
    <div className="relative border border-solid border-black p-8 m-4 rounded-md font-mono max-w-screen-xl mx-auto ">
      <form onSubmit={onSubmitHandler}>
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
