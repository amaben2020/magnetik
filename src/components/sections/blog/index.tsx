import React from 'react';
import BlogCard from '../../elements/blog-card';

const BlogSection = ({ title }) => {
  return (
    <div>
      <BlogCard title={title} />
    </div>
  );
};

export default BlogSection;
