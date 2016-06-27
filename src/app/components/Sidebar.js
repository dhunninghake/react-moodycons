import React, { Component } from 'react';

const styles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '30%',
  height: '100%',
  borderRight: '1px solid black',
  backgroundColor: 'white'
};

export default class Sidebar extends Component {
  render() {
    return (
      <div style={styles}>
        <h1>Moodycons</h1>
      </div>
    );
  }
}