import { Link } from 'gatsby';
import React from 'react';
import { TBlogCard } from './types';
import { kebabCase } from 'lodash';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as styles from './styles.module.scss';
import Label from '../label';
import useTheme from '@/hooks/useTheme';

const BlogCard = ({ title, topic, slug, image, description }: TBlogCard) => {
  const imageConvertedToGatsby = getImage(image);
  const value = useTheme();
  return (
    <Link
      className={styles.wrapper}
      data-variant={value.value ? 'dark' : ''}
      to={`/blog/${kebabCase(slug)}`}
    >
      <h3>{title}</h3>
      <GatsbyImage
        image={imageConvertedToGatsby}
        alt={`Image of ${title.toLowerCase()}`}
        className={styles.img}
      />

      <Label text={topic} type={topic} />

      <p>{description}</p>
    </Link>
  );
};

export default BlogCard;
