import HeroComponent from './../../components/elements/hero';
import React from 'react';

const body = {
  ContentfulHero: HeroComponent,
};

export const getContentfulPage = (section) => {
  console.log('Section', section);
  const Section = body[section.__typename] || (
    <p>Please insert proper component</p>
  );

  return <Section {...section} />;
};
