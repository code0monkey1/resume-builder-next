'use client';
import React from 'react';
type Props = {};

const Form1 = (props: Props) => {
  return (
    <>
      <div className="flex flex-row">
        <label>First Name</label>
        <input type="text" autoFocus></input>
        <label>Last Name</label>
        <input type="text"></input>
        <label>Age</label>
        <input type="number" />
      </div>
    </>
  );
};

export default Form1;
