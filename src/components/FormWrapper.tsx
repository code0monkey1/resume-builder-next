import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: Props) => {
  return (
    <div>
      <h1 className="text-center mt-0 mb-8">{title}</h1>
      <div className="grid grid-cols-auto grid-cols-min-auto grid-cols-max-400px gap-x-4 gap-y-2 justify-start">
        {children}
      </div>
    </div>
  );
};

export default FormWrapper;
