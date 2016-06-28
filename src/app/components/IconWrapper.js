import React, { Component } from 'react';
import icons from '../lib/icons';
import Icon from './Icon';

const styles = {
  boxSizing: 'border-box',
  paddingLeft: '30%',
  
};

export default class IconWrapper extends Component {

  renderIcons() {
    return icons.map(icon => {
      return (
        <Icon 
          text={icon.text}
          icon={icon.path}
        />
      );
    });
  }

  render() {
    return (
      <div style={styles}>{this.renderIcons()}</div>
    );
  }
}