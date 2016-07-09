import React, { Component } from 'react';
import icons from '../../../src/icons';
import Icon from './Icon';

const wrapperStyles = {
  boxSizing: 'border-box',
  paddingLeft: '30%',
};

const baseStyles = {
  float: 'left',
  padding: '0 2rem',
  width: '25%',
};

const colors = {
  black: { color: '#000' },
  green: { color: '#00FF00' },
  red:   { color: '#ff0000' },
};

export default class IconWrapper extends Component {

  constructor(props) {
    super(...props);
    this.state = { color: 'black' };
  }

  changeColor(color) {
    this.setState({ color: color });
  }

  combinedIconStyles() {
    return Object.assign(
      {},
      baseStyles,
      colors[this.state.color]
    );
  }

  renderIcons() {
    return Object.keys(icons).map(icon => {
      return (
        <div style={this.combinedIconStyles()}>
          <Icon name={icon} />
        </div>
      );
    });
  }

  renderColors() {
    return Object.keys(colors).map(color => {
      return (
        <div>
          <span onClick={this.changeColor.bind(this, color)}>{color}</span>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div>{this.renderColors()}</div>
        <div style={wrapperStyles}>{this.renderIcons()}</div>
      </div>
    );
  }
}