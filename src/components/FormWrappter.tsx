import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const FormWrappter = ({ title, children }: Props) => {
  return (
    <div>
      <h2 className="text-center mt-0 mb-8"></h2>
    </div>
  );
};

export default FormWrappter;
