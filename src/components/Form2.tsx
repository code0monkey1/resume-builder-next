'use client';
import React from 'react';
import FormWrapper from './FormWrapper';

type Props = {};

const Form2 = (props: Props) => {
  return (
    <FormWrapper title="Address">
      <div
        className="flex flex-col
      "
      >
        <label>Street</label>
        <input autoFocus required type="text" />
        <label>City</label>
        <input required type="text" />
        <label>State</label>
        <input required type="text" />
        <label>Zip</label>
        <input required type="text" />
      </div>
    </FormWrapper>
  );
};

export default Form2;
