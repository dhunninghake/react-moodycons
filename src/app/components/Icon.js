import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    text:    PropTypes.string.isRequired,
    path:    PropTypes.string,
    width:   PropTypes.number,
    height:  PropTypes.number
  }

  static defaultProps = {
    width: 50,
    height: 50
  }

  render() {
    return (
      <div>
        <svg 
          width={this.props.width} 
          height={this.props.height}
          viewBox='0 0 25 25'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'>
          <path d={this.props.path}/>
        </svg>
        <h5>{this.props.text}</h5>
      </div>
    );
  }
}

