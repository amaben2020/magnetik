import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { THero } from '../type';

const Hero1 = (props: THero) => {
  console.log('Props in Hero', props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.title}</p>

      <GatsbyImage />
    </div>
  );
};

export default Hero1;
