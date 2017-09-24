import React from 'react';
import icons from './icons';

const Moodycon = ({
  name = 'grinning',
  width = 50,
  height = 50,
  fill = 'currentColor'
}) => (
  <svg
    role='img'
    width={width}
    height={height}
    fill={fill}
    viewBox='0 0 25 25'
    aria-labelledby={name}
    xmlns='http://www.w3.org/2000/svg'>
    <title id={name}>
      {name} icon
    </title>
    <path d={icons[name]}/>
  </svg>
);

export {
  icons,
  Moodycon
};
