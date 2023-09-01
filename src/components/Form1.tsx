'use client';
import { InitialData } from '@/app/form/page';
import React from 'react';
import FormWrapper from './FormWrapper';

const Form1 = ({ firstName, lastName, age }: Partial<InitialData>) => {
  return (
    <>
      <FormWrapper title="Personal Information">
        <input
          style={{ color: 'black' }}
          className=" border w-fit p-2"
          placeholder="enter your first name"
          type="text"
          autoFocus
          required
          defaultValue={firstName}
        />
        <label>Last Name</label>
        <input
          style={{ color: 'black' }}
          className=" border  w-fit p-2 text-black"
          placeholder="enter your last name"
          type="text"
          required
          defaultValue={lastName}
        />
        <label>Age</label>
        <input
          style={{ color: 'black' }}
          className=" border w-fit p-2 text-black"
          placeholder="enter your age"
          type="text"
          required
          defaultValue={age}
        />
      </FormWrapper>
    </>
  );
};

export default Form1;
