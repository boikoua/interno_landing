import React from 'react';

type Props = {
  tag: string;
  className: string;
  text: string;
};

const Title: React.FC<Props> = ({ tag, className, text }) => {
  return React.createElement(tag, { className }, text);
};

export default Title;
