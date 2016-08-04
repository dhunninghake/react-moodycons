import React, { Component } from 'react';
import IconWrapper from './IconWrapper';
import Sidebar from './Sidebar';
import Header from './Header';
import { colorList } from 'maude/dist/defaults';
import utilityStyles from 'maude';

utilityStyles();

const colors = {
  black:   { color: colorList.black },
  blue:    { color: colorList.blue },
  green:   { color: colorList.green },
  maroon:  { color: colorList.maroon },
  aqua:    { color: colorList.aqua },
  olive:   { color: colorList.olive },
  lime:    { color: colorList.lime },
  navy:    { color: colorList.navy },
  purple:  { color: colorList.purple },
  fuchsia: { color: colorList.fuchsia },
  orange:  { color: colorList.orange },
  red:     { color: colorList.red },
  teal:    { color: colorList.teal },
  yellow:  { color: colorList.yellow },
  silver:  { color: colorList.silver },
};

const typeface = {
  fontFamily: "'CalibreRegular', sans-serif"
};

export default class App extends Component {

  constructor(props) {
    super(...props);
    this.state = { color: 'black' };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(color) {
    this.setState({ color: color });
  }

  render() {
    return (
      <div className={'col11 mx-auto clearfix'} style={typeface}>
        <Header colors={colors} activeColor={this.state.color} changeColor={this.changeColor} />
        <div className={'left col4'}>
          <Sidebar />
        </div>
        <div className={'right col8'}>
          <IconWrapper color={colors[this.state.color]} />
        </div>
      </div>
    );
  }
}
