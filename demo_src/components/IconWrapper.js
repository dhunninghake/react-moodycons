import React, { Component } from 'react';
import { icons } from '../data';
import Icon from './Icon';

export default class IconWrapper extends Component {

  renderIcons() {
    return Object.keys(icons).map((icon, i) => {
      return (<Icon key={i} name={icon} />);
    });
  }

  render() {
    return (
      <div>{this.renderIcons()}</div>
    );
  }
}