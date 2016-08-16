import React, { Component } from 'react';
import IconWrapper from './IconWrapper';
import Header from './Header';
import readme from '../../README.md';
import utilityStyles from 'maude';

utilityStyles();

const themes = [
  { name: 'minimal', color: '#000000', background: '#ffffff' },
  { name: 'retro', color: '#ff8181', background: '#3A3C83' },
  { name: 'midnight', color: '#1e5897', background: '#001318' },
  { name: 'sunburnt', color: '#e41e4a', background: '#fcb515' },
  { name: 'peaches', color: '#f7725a', background: '#4d484c' },
  { name: 'desert', color: '#36363b', background: '#eeb668' },
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { theme: 'minimal' };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme) {
    this.setState({ theme: theme });
  }

  findActiveTheme(theme) {
    return themes.filter(t => theme === t.name)[0];
  }

  render() {

    const activeTheme = this.findActiveTheme(this.state.theme);

    const globalStyles = {
      fontFamily: "'CalibreRegular', sans-serif",
      backgroundColor: activeTheme.background,
      color: activeTheme.color
    };

    const Readme = () => {
      return (
        <div className={'left col12 sm-col6 lg-col4'}>
          <div className={'readme'} dangerouslySetInnerHTML={{__html: readme}}></div>
        </div>
      );
    };

    const Footer = () => {
      return (
        <div className={'center pt4 pb4'}>
          <p className={'pb4'}>Made by <a href='http://dhunninghake.com'>dhunninghake</a></p>
        </div>
      );
    };

    const Nav = () => {
      const background = {
        backgroundColor: activeTheme.background
      };
      return (
        <div style={background} className={'sidebar fixed border-box'}>
          <Header 
            themes={themes}
            activeTheme={activeTheme}
            changeTheme={this.changeTheme}
          />
        </div>
      );
    };

    const Icons = () => {
      return (
        <div className={'left col12 sm-col6 lg-col6 pt2'}>
          <IconWrapper />
        </div>
      );
    }

    return (
      <div className='root' style={globalStyles}>
        <div className={'col11 mx-auto overflow-hidden'}>
          {Nav()}
          {Readme()}
          {Icons()}
        </div>
        {Footer()}
      </div>
    );
  }
}
