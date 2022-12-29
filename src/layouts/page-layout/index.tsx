import React from 'react';
import * as styles from './styles.module.scss';
import { TPageLayout } from './types';
import { Script } from 'gatsby';

const PageLayout = ({ children, title }: TPageLayout) => {
  return (
    <main className={styles.wrapper}>
      <Script src={`//code.tidio.co/${process.env.TIDIO_ID}.js`} async />
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
