import { Link } from 'gatsby';
import React from 'react';

const Header = ({ logo, toggleDarkMode, navItems }: any) => {
  console.log('navItems', navItems);
  return (
    <header>
      <ul>
        {logo?.title}
        {navItems.map((link) => (
          <Link to={link.url}>{link.title}</Link>
        ))}
      </ul>
      TODO: Implement elastic search 🔍
      {toggleDarkMode}
    </header>
  );
};

export default Header;
