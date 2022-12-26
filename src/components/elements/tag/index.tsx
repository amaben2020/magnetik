import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
const TagList = ({ tags }) => {
  return (
    <>
      {tags.map((tag) => (
        <Link key={tag} to={`/tag/${kebabCase(tag)}`}>
          <div key={tag} style={{ display: 'flex', margin: 10 }}>
            <p>{tag}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default TagList;
