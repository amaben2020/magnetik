import React from 'react';
import * as styles from './styles.module.scss';
import { TPageLayout } from './types';

const PageLayout = ({ children, title }: TPageLayout) => {
  return (
    <main className={styles.wrapper}>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
};

export default PageLayout;
