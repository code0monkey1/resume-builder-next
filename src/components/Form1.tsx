'use client';
import { InitialData } from '@/app/form/page';
import React from 'react';
import FormWrapper from './FormWrapper';

type Intro = Pick<InitialData, 'age' | 'firstName' | 'lastName'>;

type Props = Intro & {
  updateField: (fields: Partial<Intro>) => void;
};

const Form1 = ({ firstName, lastName, age, updateField }: Props) => {
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
          onChange={(e) => updateField({ lastName: e.target.value })}
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
