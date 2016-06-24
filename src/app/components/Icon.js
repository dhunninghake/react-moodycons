import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    text:    PropTypes.string.isRequired,
    icon:    PropTypes.object.isRequired,
    width:   PropTypes.number,
    height:  PropTypes.number,
    style:   PropTypes.array,
    fill:    PropTypes.string
  }

  static defaultProps = {
    width: 23,
    height: 23
  }

  render() {
    return (
      <div>
        <svg 
          viewBox='0 0 23 23'
          width={this.props.width} 
          height={this.props.height} 
          style={this.props.style}
          fill={this.props.fill}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1">
          {this.props.icon}
        </svg>
        <h5>{this.props.text}</h5>
      </div>
    );
  }
}

