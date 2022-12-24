import React from 'react';
import * as styles from './styles.module.scss';
import { TPageLayout } from './types';

const PageLayout = ({ children }: TPageLayout) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default PageLayout;
