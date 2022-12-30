import { Link } from 'gatsby';
import React from 'react';
import { TBlogCard } from './types';
import { kebabCase } from 'lodash';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import Label from '../label';

const BlogCard = ({ title, topic, slug, image, description }: TBlogCard) => {
  const ima = getImage(image);
  return (
    <Link className={styles.wrapper} to={`/blog/${kebabCase(slug)}`}>
      <h3>{title}</h3>
      <GatsbyImage image={ima} alt='' className={styles.img} />

      <Label text={topic} type={topic} />

      <p>{description}</p>
    </Link>
  );
};

export default BlogCard;
