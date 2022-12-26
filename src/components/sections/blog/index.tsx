import TagList from '@/components/elements/tag';
import React from 'react';
import BlogCard from '../../elements/blog-card';
import * as styles from './styles.module.scss';

const BlogSection = ({ blogs }) => {
  console.log(blogs);

  const tags = blogs.map((blog) => blog.topic);
  return (
    <section className={styles.wrapper}>
      <div>Sort , Pagination, Tags, Filter</div>

      <TagList tags={tags} />

      {blogs.map(({ title, topic }) => (
        <BlogCard title={title} topic={topic} />
      ))}
    </section>
  );
};

export default BlogSection;
