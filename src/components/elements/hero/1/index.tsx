import React from 'react';
import { THero } from '../type';

const Hero1 = (props: THero) => {
  console.log('Props in Hero', props);
  return <div>{props.title}</div>;
};

export default Hero1;
