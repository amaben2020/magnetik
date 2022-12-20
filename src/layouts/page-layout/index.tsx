import React from 'react';
import { TPageLayout } from './types';

const PageLayout = ({ children }: TPageLayout) => {
  return <main>{children}</main>;
};

export default PageLayout;
