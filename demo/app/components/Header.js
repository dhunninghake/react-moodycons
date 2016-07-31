import React, { Component } from 'react';

export default class Sidebar extends Component {
  render() {
    const colorList = Object.keys(this.props.colors).map((color, i) => {
      return (
        <span key={i} onClick={this.props.changeColor.bind(this, color)}>{color}</span>
      );
    });
    return (
      <div className={'mb3'}>
        <h1 className={'col12 md-col3 inline-block align-middle'}>React Moodycons</h1>
        <div className={'col12 md-col6 inline-block align-middle center'}>{colorList}</div>
        <h4 className={'col12 md-col3 inline-block align-middle right-align'}>Something else</h4>
      </div>
    );
  }
}

