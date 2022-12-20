import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@/layouts/page-layout';

const IndexPage: React.FC<PageProps> = () => {
  return <PageLayout>Magnetik</PageLayout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
