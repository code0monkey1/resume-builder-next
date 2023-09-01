'use client';
import React from 'react';
import FormWrapper from './FormWrapper';
type Props = {};

const Form1 = (props: Props) => {
  return (
    <>
      <FormWrapper title="Personal Information">
        <div className="flex flex-col border border-black  p-2">
          <label>First Name</label>
          <input
            className=" border w-fit p-2 text-yellow-400"
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
        </div>
      </FormWrapper>
    </>
  );
};

export default Form1;
