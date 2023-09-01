'use client';
import React from 'react';
type Props = {};

const Form1 = (props: Props) => {
  return (
    <>
      <label>First Name</label>
      <input type="text" autoFocus></input>
      <label>Last Name</label>
      <input type="text"></input>
      <label>Age</label>
      <input type="number" />
    </>
  );
};

export default Form1;
