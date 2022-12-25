import HeroComponent from './../../components/elements/hero';
import BlogSection from '../../components/sections/blog';
import React from 'react';

const body = {
  ContentfulHero: HeroComponent,
  ContentfulBlogs: BlogSection,
};

export const getContentfulPage = (section) => {
  const Section = body[section.__typename] ?? (
    <p>Please insert proper component</p>
  );

  return <Section {...section} />;
};
