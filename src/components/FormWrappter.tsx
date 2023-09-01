import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FormWrappter = ({ title, children }: Props) => {
  return <div>FormWrappter</div>;
};

export default FormWrappter;
