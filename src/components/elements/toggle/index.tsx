import React from 'react';
import './styles.module.scss';
const Toggle = ({ checked, onChange }: any) => (
  <span className='toggle-control'>
    <input
      className='dmcheck'
      type='checkbox'
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor='dmcheck' />
  </span>
);

export default Toggle;
