import TagList from '@/components/sections/tags';
import React from 'react';
import BlogCard from '../../elements/blog-card';
import * as styles from './styles.module.scss';

const BlogSection = ({ blogs }) => {
  console.log(blogs);

  const tags = blogs.map((blog) => blog.topic);
  return (
    <section className={styles.wrapper}>
      <div>Sort , Pagination, Tags, Filter</div>

      <div className={styles.tags}>
        <TagList tags={tags} />
      </div>

      <div className={styles.blogs}>
        {blogs.map(({ title, topic, slug, image, description }) => (
          <BlogCard
            title={title}
            topic={topic}
            slug={slug}
            image={image}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
