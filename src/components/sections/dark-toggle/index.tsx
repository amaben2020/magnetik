import Toggle from '@/components/elements/toggle';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import useDarkMode from 'use-dark-mode';
import * as styles from './styles.module.scss';

const DarkModeToggle = () => {
  const value = useTheme();

  return (
    <div className='toggle-icons'>
      <button
        className={styles.button}
        id='sun'
        type='button'
        onClick={value.disable}
      >
        ☀
      </button>

      <Toggle checked={value.value} onChange={value.toggle} />
      <button
        id='moon'
        type='button'
        onClick={value.enable}
        className={styles.button}
      >
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
