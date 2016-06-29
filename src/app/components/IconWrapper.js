import React, { Component } from 'react';
import icons from '../lib/icons';
import Icon from './Icon';

const wrapperStyles = {
  boxSizing: 'border-box',
  paddingLeft: '30%',
};

const iconStyles = {
  float: 'left',
  padding: '0 2rem',
  width: '25%'
};

export default class IconWrapper extends Component {

  renderIcons() {
    return icons.map(icon => {
      return (
        <div style={iconStyles}>
          <Icon text={icon.text} icon={icon.path} />
        </div>
      );
    });
  }

  render() {
    return (
      <div style={wrapperStyles}>{this.renderIcons()}</div>
    );
  }
}