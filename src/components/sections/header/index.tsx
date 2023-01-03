import LinkComponent from '@/components/elements/link';
import React from 'react';
import * as styles from './styles.module.scss';

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  console.log('navItems', navItems);
  return (
    <header className={styles.header}>
      <ul>
        {logo?.title}
        {navItems.map((link) => (
          <li key={link.title}>
            <LinkComponent url={link.url} title={link.title} />
          </li>
        ))}
      </ul>
      TODO: Implement elastic search 🔍
      {toggleDarkMode}
    </header>
  );
};

export default Header;
