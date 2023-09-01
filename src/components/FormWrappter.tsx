import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FormWrappter = ({ title, children }: Props) => {
  return (
    <div>
      <h2 className="text-center mt-0 mb-8">{title}</h2>
      <div className="grid gap-x-4 gap-y-2 justify-start"></div>
    </div>
  );
};

export default FormWrappter;
