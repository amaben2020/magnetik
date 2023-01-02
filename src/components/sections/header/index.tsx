import React from 'react';

const Header = ({ logo }: any) => {
  console.log('logo', logo);
  return (
    <header>
      <p> {logo?.title} </p>
    </header>
  );
};

export default Header;
