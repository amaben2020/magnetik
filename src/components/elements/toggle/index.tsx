import React from 'react';
import * as styles from './styles.module.scss';
const Toggle = ({ checked, onChange }: any) => (
  <span className={styles['toggle-control']}>
    <input
      className={styles['dmcheck']}
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor='dmcheck' />
  </span>
);

export default Toggle;
