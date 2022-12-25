import React from 'react';
import * as styles from './styles.module.scss';
import { TBlogCard } from './types';

const BlogCard = ({ title, topic }: TBlogCard) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>

      <p>{topic}</p>
    </div>
  );
};

export default BlogCard;
