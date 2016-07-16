import React, { Component } from 'react';
import icons from '../../../src/icons';
import Icon from './Icon';

export default class IconWrapper extends Component {

  renderIcons() {
    return Object.keys(icons).map(icon => {
      return (<Icon name={icon} />);
    });
  }

  render() {
    return (
      <div style={this.props.color}>
        {this.renderIcons()}
      </div>
    );
  }
}