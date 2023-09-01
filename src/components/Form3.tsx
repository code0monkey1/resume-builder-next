import React from 'react';
import FormWrapper from './FormWrapper';

type Props = {};

const Form3 = (props: Props) => {
  return (
    <FormWrapper title="Personal Info">
      <label>Email</label>
      <input type="text" />
      <label>Password</label>
      <input type="text" />
    </FormWrapper>
  );
};

export default Form3;
