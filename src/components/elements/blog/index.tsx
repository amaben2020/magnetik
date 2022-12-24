import React from 'react';

const BlogPageComponent = ({ title }) => {
  return (
    <div
      style={{
        width: 400,
        borderRadius: 10,
        padding: 20,
        border: '1px solid red',
      }}
    >
      {title}
    </div>
  );
};

export default BlogPageComponent;
