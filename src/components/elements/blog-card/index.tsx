import React from 'react';
import * as styles from './styles.module.scss';
import { TBlogCard } from './types';

const BlogCard = ({ title }: TBlogCard) => {
  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
    </div>
  );
};

export default BlogCard;
