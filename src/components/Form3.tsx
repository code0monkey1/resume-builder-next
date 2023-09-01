import React from 'react';
import FormWrapper from './FormWrapper';

type Props = {};

const Form3 = (props: Props) => {
  return (
    <FormWrapper title="Personal Info">
      <div style={{ color: 'black' }} className="flex flex-col justify-center ">
        <label>Email</label>
        <input type="text" />
        <label>Password</label>
        <input type="text" />
      </div>
    </FormWrapper>
  );
};

export default Form3;
