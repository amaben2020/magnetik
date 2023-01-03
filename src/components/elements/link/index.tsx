import { Link } from 'gatsby';
import React from 'react';
import LinkWrapper from './hoc';

const LinkComponent = ({ url, title }: { url: string; title: string }) => {
  const isExternalLink = url.includes('http://') ? true : false;
  return (
    <LinkWrapper
      condition={isExternalLink}
      wrapper={(children) => (
        <a href={url} target='_blank'>
          {children}
        </a>
      )}
    >
      <Link to={url}> {title} </Link>
    </LinkWrapper>
  );
};

export default LinkComponent;
