import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import PageLayout from '@/layouts/page-layout';
import { printPDF } from '@/base/utils/print-pdf';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageLayout>
      <div id='root'>
        Magnetik
        <h1>Generate PDF</h1>
        <p>Create a screenshot from the page, and put it in a PDF file.</p>
        <p style={{ color: 'red' }}>
          *Open this page in new window and press the button.
        </p>
        <button id='print' onClick={() => printPDF('root')}>
          PRINT
        </button>
      </div>{' '}
    </PageLayout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
