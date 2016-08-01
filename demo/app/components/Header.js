import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    const dropdownItem = {
      border: '1px solid black',
      marginTop: '-1px',
      width: '8rem',
    }
    const activeCircle =  {
      width: '1rem',
      height: '1rem',
      backgroundColor: this.props.activeColor
    }
    const colorList = Object.keys(this.props.colors).map((color, i) => {
      const colorCircles = {
        width: '1rem',
        height: '1rem',
        backgroundColor: color
      };
      return (
        <div key={i} 
          className={'p1 bg-white left-align pointer relative z1'} 
          style={dropdownItem} 
          onClick={this.props.changeColor.bind(this, color)}>
          <span className={'inline-block align-middle circle mr1'} style={colorCircles}></span>
          <span className={'inline-block align-middle capitalize'}>{color}</span>
        </div>
      );
    });
    return (
      <div className={'mb3'}>
        <h1 className={'col12 md-col3 inline-block align-middle'}>React Moodycons</h1>
        <div className={'col12 md-col6 inline-block align-middle center'}>
          <div className={'inline-block relative'}>
            <div className={'p1 left-align pointer'} style={dropdownItem}>
              <div className={'col9 inline-block align-middle'}>
                <span className={'inline-block align-middle circle mr1'} style={activeCircle}></span>
                <span className={'inline-block align-middle capitalize'}>{this.props.activeColor}</span>
              </div>
              <div className={'col3 inline-block align-middle right-align'}>
                <svg width="16" height="9" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g fill="black" stroke-width="1.5">
                    <path d="M1.9 1.4 L8.1 7.6 L14.3 1.4"/>
                  </g>
                </svg>
              </div>
            </div>
            <div className={'absolute t0 l0'}>{colorList}</div>
          </div>
        </div>
        <div className={'col12 md-col3 inline-block align-middle right-align'}>
          <ul className={'list-reset'}>
            <li className={'inline-block align-middle ml2'}>
              <a className={'black'} href='https://www.npmjs.com/package/react-moodycons' target='_blank'>Npm</a>
            </li>
            <li className={'inline-block align-middle ml2'}>
              <a className={'black'} href='https://github.com/dhunninghake/react-moodycons' target='_blank'>Github</a>
            </li>
            <li className={'inline-block align-middle ml2'}>
              <a className={'black'} href='https://twitter.com/intent/tweet?text=React%20Moodycons&url=http%3A%2F%2Fdhunninghake.com/react-moodycons%2F' target='_blank'>Tweet</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

