'use client';
import { InitialData } from '@/app/form/page';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingCart } from 'lucide-react';
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
        <ShoppingCart className="h-4 w-4" />
        <Input
          style={{ color: 'black' }}
          className=" border w-fit p-2"
          placeholder="enter your first name"
          type="text"
          autoFocus
          required
          defaultValue={firstName}
        />
        <Label>Last Name</Label>
        <Input
          style={{ color: 'black' }}
          className=" border  w-fit p-2 text-black"
          placeholder="enter your last name"
          type="text"
          required
          onChange={(e) => updateField({ lastName: e.target.value })}
          defaultValue={lastName}
        />
        <Label>Age</Label>
        <Input
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
