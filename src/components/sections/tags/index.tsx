import Tag from '@/components/elements/tag';
import React, { Fragment } from 'react';

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <Fragment>
      {tags.map((tag) => (
        <Tag tag={tag} key={tag} />
      ))}
    </Fragment>
  );
};

export default TagList;
