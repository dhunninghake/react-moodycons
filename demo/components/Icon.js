import React, { Component, PropTypes } from 'react';
import { icons } from '../data';
import v from 'vudu';

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
    const styles = v({
      wrapper: {
        boxSizing: 'border-box',
        textAlign: 'center',
        float: 'left',
        padding: '2rem',
        width: '50%',
        '@media (min-width: 52em)': { width: '33.3%' },
        '@media (min-width: 76em)': { width: '25%' }  
      },
      text: {
        margin: '0rem',
        fontWeight: 'normal',
      }
    });
    return (
      <div className={styles.wrapper}>
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
        <h5 className={styles.text}>{this.props.name}</h5>
      </div>
    );
  }
}

