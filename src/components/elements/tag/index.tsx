import React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import * as styles from './styles.module.scss';

const Tag = ({ tag }: { tag: string }) => {
  return (
    <Link className={styles.tag} to={`/tag/${kebabCase(tag)}`}>
      {tag}
    </Link>
  );
};

export default Tag;
