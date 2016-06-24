import React, { Component } from 'react';
import icons from '../lib/icons';
import Icon from './Icon';

export default class IconWrapper extends Component {

  renderIcons() {
    return icons.map(icon => {
      return (
        <Icon 
          text={icon.text}
          icon={icon.paths}
        />
      );
    });
  }

  render() {
    return (
      <div>{this.renderIcons()}</div>
    );
  }
}