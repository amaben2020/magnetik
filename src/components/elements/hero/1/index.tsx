import React from 'react';
import { THero } from '../type';

const Hero1 = (props: THero) => {
  console.log('Props in Hero', props);
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Hero1;
