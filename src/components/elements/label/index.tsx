import React from 'react';
import * as styles from './styles.module.scss';

const Label = ({ text, type }: { text: string; type: string }) => {
  return (
    <div className={styles.wrapper} data-variant={String(type)}>
      {text}
    </div>
  );
};

export default Label;
