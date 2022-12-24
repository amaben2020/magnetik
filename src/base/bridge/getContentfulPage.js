import HeroComponent from './../../components/elements/hero';
import BlogPageComponent from './../../components/elements/blog';
import React from 'react';

const body = {
  ContentfulHero: HeroComponent,
  ContentfulBlogPost: BlogPageComponent,
};

export const getContentfulPage = (section) => {
  console.log('Section', section);
  const Section = body[section.__typename] || (
    <p>Please insert proper component</p>
  );

  return <Section {...section} />;
};
