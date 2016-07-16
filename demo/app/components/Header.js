import React, { Component } from 'react';

export default class Sidebar extends Component {

  render() {
    const colorList = Object.keys(this.props.colors).map(color => {
      return (<span onClick={this.props.changeColor.bind(this, color)}>{color}</span>);
    });
    return (
      <div>
        <h1>Moodycons</h1>
        <div>{colorList}</div>
      </div>
    );
  }

}

