import React from 'react';
import BlogCard from '../../elements/blog-card';
import * as styles from './styles.module.scss';

const BlogSection = ({ blogs }) => {
  return (
    <section className={styles.wrapper}>
      <div>Sort & Filter</div>
      {blogs.map(({ title, topic }) => (
        <BlogCard title={title} topic={topic} />
      ))}
    </section>
  );
};

export default BlogSection;
