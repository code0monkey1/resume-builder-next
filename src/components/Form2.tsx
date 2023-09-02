'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import FormWrapper from './FormWrapper';

type Props = {};

const Form2 = (props: Props) => {
  return (
    <FormWrapper title="Address">
      <Label>Street</Label>
      <Input autoFocus required type="text" />
      <Label>City</Label>
      <Input required type="text" />
      <Label>State</Label>
      <Input required type="text" />
      <Label>Zip</Label>
      <Input required type="text" />
    </FormWrapper>
  );
};

export default Form2;
