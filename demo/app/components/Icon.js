import React, { Component, PropTypes } from 'react';
import icons from '../../../src/icons';

const iconStyles = {
  textAlign: 'center',
  width: '33.3%',
  float: 'left'
};

export default class Icon extends Component {
  static propTypes = {
    name:   PropTypes.string.isRequired,
    width:  PropTypes.number,
    height: PropTypes.number,
    fill:   PropTypes.string
  }

  static defaultProps = {
    name: 'grinning',
    width: 50,
    height: 50,
    fill: 'currentColor'
  }

  render() {
    return (
      <div style={iconStyles}>
        <svg 
          role='img'
          width={this.props.width} 
          height={this.props.height}
          fill={this.props.fill}
          viewBox='0 0 25 25'
          aria-labelledby={this.props.name}
          xmlns='http://www.w3.org/2000/svg'>
          <title id={this.props.name}>
            {this.props.name} icon
          </title>
          <path d={icons[this.props.name]}/>
        </svg>
        <h5>{this.props.name}</h5>
      </div>
    );
  }
}

