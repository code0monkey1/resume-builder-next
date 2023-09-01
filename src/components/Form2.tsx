'use client';
import React from 'react';

type Props = {};

const Form2 = (props: Props) => {
  return (
    <div>
      <label>Street</label>
      <input autoFocus required type="text" />
      <label>City</label>
      <input required type="text" />
      <label>State</label>
      <input required type="text" />
      <label>Zip</label>
      <input required type="text" />
    </div>
  );
};

export default Form2;
