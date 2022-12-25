import React from 'react';
import BlogCard from '../../elements/blog-card';
import * as styles from './styles.module.scss';

const BlogSection = ({ blogs }) => {
  console.log('Blogs', blogs);
  return (
    <section className={styles.wrapper}>
      {blogs.map(({ title }) => (
        <BlogCard title={title} />
      ))}
    </section>
  );
};

export default BlogSection;
