import React, { Component } from 'react';
import readme from '../../README.md';

export default class Sidebar extends Component {
  render() {
    return (
      <div className={'readme'} dangerouslySetInnerHTML={{__html: readme}}></div>
    );
  }
}