import React, { Component } from 'react';
import IconWrapper from '../components/IconWrapper';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const boxSizing = {
  boxSizing: 'border-box',
};

const sidebarContainer = {
  width: '30%',
  float: 'left'
};

const iconsContainer = {
  width: '70%',
  float: 'right'
};

const colors = {
  black: { color: '#000' },
  green: { color: '#00FF00' },
  red:   { color: '#ff0000' },
};

export default class App extends Component {

  constructor(props) {
    super(...props);
    this.state = { color: 'black' };
  }

  changeColor(color) {
    console.log('color');
    console.log(color);
    this.setState({ color: color });
  }

  render() {
    return (
      <div style={boxSizing}>
        <Header colors={colors} changeColor={this.changeColor.bind(this)} />
        <div style={sidebarContainer}>
          <Sidebar />
        </div>
        <div style={iconsContainer}>
          <IconWrapper color={colors[this.state.color]} />
        </div>
      </div>
    );
  }
}
