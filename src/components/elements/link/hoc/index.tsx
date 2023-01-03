import React from 'react';
import { TLinkHoc } from './types';

const LinkWrapper = ({ children, condition, wrapper }: TLinkHoc) => {
  // just did this when diving deeper into the children api
  const onlyOneChild = React.Children.only(children);

  return condition ? wrapper(onlyOneChild) : onlyOneChild;
};

export default LinkWrapper;
