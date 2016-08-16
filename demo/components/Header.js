import React, { Component } from 'react';

const links = [{ 
    text: 'Npm', 
    link: 'https://www.npmjs.com/package/react-moodycons'
  },{ 
    text: 'Github', 
    link: 'https://github.com/dhunninghake/react-moodycons'
  },{ 
    text: 'Tweet', 
    link: 'https://twitter.com/intent/tweet?text=React%20Moodycons&url=http%3A%2F%2Fdhunninghake.com/react-moodycons%2F'
}];

export default class Header extends Component {

  constructor(props) {
    super(...props);
    this.state = { themeNavOpen: false };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ themeNavOpen: !this.state.themeNavOpen });
  }

  change(theme) {
    this.props.changeTheme(theme);
    this.toggleNav();
  }

  render() {
    
    const dropdownItem = {
      backgroundColor: this.props.activeTheme.background,
      color: this.props.activeTheme.color,
      border: '1px solid currentColor',
      marginTop: '-1px',
      width: '8rem',
    };
    
    const activeCircle =  {
      width: '1rem',
      height: '1rem',
      backgroundColor: this.props.activeTheme.color
    };    
    
    const linkNav = links.map((link, i) => {
      return(
        <a key={i} 
          className={'inline-block align-middle'} 
          href={link.link} 
          target='_blank'>
          {link.text}
        </a>
      );
    });

    const themeList = this.props.themes.map((theme, i) => {
      const colorCircles = {
        width: '1rem',
        height: '1rem',
        backgroundColor: theme.color
      };
      return (
        <div key={i} 
          className={'p1 left-align pointer relative z1'} 
          style={dropdownItem} 
          onClick={this.change.bind(this, theme.name)}>
          <span className={'inline-block align-middle circle mr1 down-1'} style={colorCircles}></span>
          <span className={'inline-block align-middle capitalize down-3'}>{theme.name}</span>
        </div>
      );
    });
    return (
      <div>
        <nav className={'nav pt2'}>
          {linkNav}
        </nav>
        <div className={'picker right relative'}>
          <small className={'picker-text'}>Choose a theme</small>
          <div className={'p1 left-align pointer'} style={dropdownItem} onClick={this.toggleNav}>
            <div className={'col9 inline-block align-middle'}>
              <span className={'inline-block align-middle circle mr1 down-1'} style={activeCircle}></span>
              <span className={'inline-block align-middle capitalize down-3'}>{this.props.activeTheme.name}</span>
            </div>
            <div className={'col3 inline-block align-middle right-align down-2'}>
              <svg width="16" height="9" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor" stroke-width="1.5">
                  <path d="M1.9 1.4 L8.1 7.6 L14.3 1.4"/>
                </g>
              </svg>
            </div>
          </div>
          {this.state.themeNavOpen && <div className={'theme-nav absolute l0'}>{themeList}</div>}
        </div>
      </div>
    );
  }
}

