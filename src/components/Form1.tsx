'use client';
import React from 'react';
import FormWrapper from './FormWrapper';
type Props = {};

const Form1 = (props: Props) => {
  return (
    <>
      <FormWrapper title="Personal Information">
        <input
          className=" border w-fit p-2"
          placeholder="enter your first name"
          type="text"
          autoFocus
          required
        />
        <label>Last Name</label>
        <input
          className=" border  w-fit p-2 text-black"
          placeholder="enter your last name"
          type="text"
          required
        />
        <label>Age</label>
        <input
          className=" border w-fit p-2 text-black"
          placeholder="enter your age"
          type="text"
          required
        />
      </FormWrapper>
    </>
  );
};

export default Form1;
