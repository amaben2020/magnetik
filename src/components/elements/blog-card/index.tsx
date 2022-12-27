import { Link } from 'gatsby';
import React from 'react';
import * as styles from './styles.module.scss';
import { TBlogCard } from './types';
import { kebabCase } from 'lodash';

const BlogCard = ({ title, topic, slug }: TBlogCard) => {
  return (
    <Link className={styles.wrapper} to={`/blog/${kebabCase(slug)}`}>
      <h3>{title}</h3>

      <p>{topic}</p>
    </Link>
  );
};

export default BlogCard;
