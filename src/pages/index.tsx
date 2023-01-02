import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@/layouts/page-layout';
import { printPDF } from '@/base/utils/print-pdf';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout title=''>Hero ===Use Twilio for sending messages</PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
