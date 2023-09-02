import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import FormWrapper from './FormWrapper';

type Props = {};

const Form3 = (props: Props) => {
  return (
    <FormWrapper title="Personal Info">
      <Label>Email</Label>
      <Input type="text" />
      <Label>Password</Label>
      <Input type="text" />
    </FormWrapper>
  );
};

export default Form3;
