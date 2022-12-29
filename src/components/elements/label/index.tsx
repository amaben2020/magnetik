import React from 'react';
import { TOPIC } from './enum';

const Label = ({ text }: { text: string }) => {
  const renderLabel = (label: string) => {
    switch (label) {
      case TOPIC.DEVELOPMENT:
        return {
          color: 'red',
          backgroundColor: 'green',
        };
      case TOPIC.PRODUCT:
        return {
          color: 'yellow',
          backgroundColor: 'red',
        };

      default:
        break;
    }
  };

  return <div style={{ ...renderLabel(text) }}>{text}</div>;
};

export default Label;
