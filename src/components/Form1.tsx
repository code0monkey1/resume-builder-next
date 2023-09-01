'use client';
import React from 'react';
type Props = {};

const Form1 = (props: Props) => {
  return (
    <>
      <div className="flex flex-col border border-black  p-2">
        <label>First Name</label>
        <input
          className=" border w-fit p-2"
          placeholder="enter your name"
          type="text"
          autoFocus
          required
        />
        <label>Last Name</label>
        <input
          className=" border  w-fit p-2"
          placeholder="enter your name"
          type="text"
          required
        />
        <label>Age</label>
        <input
          className=" border w-fit p-2"
          placeholder="enter your name"
          type="text"
          required
        />
      </div>
    </>
  );
};

export default Form1;
