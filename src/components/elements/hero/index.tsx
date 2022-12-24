import React from 'react';
import Hero1 from './1';

const HeroComponent = (props: any) => {
  const Component = {
    1: Hero1,
  };

  const Hero = Component[props.variant];

  return <Hero {...props} />;
};

export default HeroComponent;
