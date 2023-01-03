import React from 'react';
import { TLinkHoc } from './types';

const LinkWrapper = ({ children, condition, wrapper }: TLinkHoc) => {
  return condition ? wrapper(children) : children;
};

export default LinkWrapper;
