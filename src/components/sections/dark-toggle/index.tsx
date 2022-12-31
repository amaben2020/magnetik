import Toggle from '@/components/elements/toggle';
import useTheme from '@/hooks/useTheme';
import React from 'react';
import useDarkMode from 'use-dark-mode';
import * as styles from './styles.module.scss';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);
  console.log('Dark Mode', darkMode);

  const disable = useTheme();
  console.log('Disable', disable);
  return (
    <div className='toggle-icons'>
      <button
        className={styles.button}
        id='sun'
        type='button'
        onClick={darkMode.disable}
      >
        ☀
      </button>

      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button
        id='moon'
        type='button'
        onClick={darkMode.enable}
        className={styles.button}
      >
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
