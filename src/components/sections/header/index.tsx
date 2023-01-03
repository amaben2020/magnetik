import LinkComponent from '@/components/elements/link';
import { Link } from 'gatsby';
import React from 'react';

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  console.log('navItems', navItems);
  return (
    <header>
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
