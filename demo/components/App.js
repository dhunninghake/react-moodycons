import React, { Component } from 'react';
import IconWrapper from './IconWrapper';
import readme from '../../README.md';
import v from '../v/v';

const linkData = [{ 
    text: 'Npm', 
    link: 'https://www.npmjs.com/package/react-moodycons'
  },{ 
    text: 'Github', 
    link: 'https://github.com/dhunninghake/react-moodycons'
  },{ 
    text: 'Tweet', 
    link: 'https://twitter.com/intent/tweet?text=React%20Moodycons&url=http%3A%2F%2Fdhunninghake.com/react-moodycons%2F'
}];

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
    this.state = { 
      theme: 'minimal',
      themeNavOpen: false
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ themeNavOpen: !this.state.themeNavOpen });
  }

  changeTheme(theme) {
    this.setState({ theme: theme });
  }

  render() {

    const activeTheme = (() => {
      return themes.filter(t => this.state.theme === t.name)[0];
    })();

    
    const Readme = () => {
      const styles = {
        container: {
          float: 'left',
          width: '100%',
          '@media (min-width: 40em)': { width: '50%' },
          '@media (min-width: 64em)': { width: '33.3%' },
        }
      };
      return v(
        <div vStyle={styles.container}>
          <div className={'readme'} dangerouslySetInnerHTML={{__html: readme}}></div>
        </div>
      );
    };

    
    const Footer = () => {
      const styles = {
        container: {
          textAlign: 'center',
          paddingTop: '4rem',
          paddingBottom: '4rem'  
        },
        text: {
          paddingBottom: '4rem'
        }
      };
      return v(
        <div vStyle={styles.container}>
          <p vStyle={styles.text}>Made by <a href='http://dhunninghake.com'>dhunninghake</a></p>
        </div>
      );
    };

    
    const ThemeItem = (props) => {
      const styles = {
        item: {
          backgroundColor: activeTheme.background,
          color: activeTheme.color,
          border: '1px solid currentColor',
          marginTop: props.list ? '-1px' : '0rem',
          padding: '.5rem',
          textAlign: 'left',
          cursor: 'pointer',
          position: 'relative',
          width: '8rem',
          zIndex: 1
        },
        circle: {
          backgroundColor: activeTheme.color,
          display: 'inline-block',
          verticalAlign: 'middle',
          borderRadius: '50%',
          marginRight: '.5rem',
          position: 'relative',
          top: '1px',
          width: '1rem',
          height: '1rem'
        },
        name: {
          display: 'inline-block',
          verticalAlign: 'middle',
          textTransform: 'uppercase',
          position: 'relative',
          top: '3px'
        },
        itemLeft: {
          width: '75%',
          display: 'inline-block',
          verticalAlign: 'middle',
        },
        itemRight: {
          width: '25%',
          display: 'inline-block',
          verticalAlign: 'middle',
          textAlign: 'right',
          position: 'relative',
          top: '2px'
        },
      };
      if (props.list) {
        const themeList = themes.map((theme, i) => {
          const color = { backgroundColor: theme.color };
          return (
            <div key={i} 
              vStyle={styles.item}
              onClick={props.toggleNav}>
              <span vStyle={styles.circle} style={color}></span>
              <span vStyle={styles.name}>{theme.name}</span>
            </div>
          );
        });
        return v(
          <div>{themeList}</div>
        );
      } else {
        return v(
          <div vStyle={styles.item}>
            <div vStyle={styles.itemLeft}>
              <span vStyle={styles.circle}></span>
              <span vStyle={styles.name}>{activeTheme.name}</span>
            </div>
            <div vStyle={styles.itemRight}>
              <svg width="16" height="9" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor" stroke-width="1.5">
                  <path d="M1.9 1.4 L8.1 7.6 L14.3 1.4"/>
                </g>
              </svg>
            </div>
          </div>
        );
      }
    };


    const Picker = () => {
      const styles = {
        container: {
          float: 'right',
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'middle',
          '@media (min-width: 64em)': {
            display: 'block'
          }
        },
        eyelash: {
          display: 'none',
          '@media (min-width: 64em)': {
            display: 'block'
          }
        },
        list: {
          position: 'absolute',
          left: '0rem',
          bottom: '100%',
          '@media (min-width: 64em)': {
            bottom: 'auto',
            top: '100%'
          }
        }
      };
      return v(
        <div vStyle={styles.container}>
          <small vStyle={styles.eyelash}>Choose a theme</small>
          <ThemeItem toggleNav={this.toggleNav} />
          <div vStyle={styles.list}>
            <ThemeItem list />
          </div>
        </div>
      );
    };

    const LinkNav = () => {
      const styles = {
        container: {
          display: 'inline-block',
          verticalAlign: 'middle',
          marginBottom: '0rem',
          paddingTop: '1rem',
          '@media (min-width: 64rem)': {
            display: 'block',
            marginBottom: '3rem'
          }
        },
        links: {
          display: 'inline-block',
          verticalAlign: 'middle',
          margin: '0 1rem 0 0',
          '@media (min-width: 64rem)': {
            margin: '0 0 0 1rem'
          }
        }
      };
      const links = linkData.map((link, i) => {
        return (
          <a key={i} 
            vStyle={styles.links}
            href={link.link} 
            target='_blank'>
            {link.text}
          </a>
        );
      });
      return v(
        <div>
          <div vStyle={styles.container}>
            {links}
          </div>
          <Picker />
        </div>
      );
    };


    const Nav = () => {
      const styles = {
        container: {
          backgroundColor: activeTheme.background,
          position: 'fixed',
          boxSizing: 'border-box',
          borderTop: '1px solid currentColor',
          bottom: '0rem',
          textAlign: 'left',
          left: '0rem',
          padding: '1rem',
          width: '100%',
          zIndex: 1,
          transition: 'background-color .4s ease',
          '@media (min-width: 64rem)': {
            background: 'transparent',
            border: 'none',
            top: '0rem',
            right: '0rem',
            left: 'auto',
            bottom: 'auto',
            padding: '2.5rem 3rem 0 0',
            textAlign: 'right',
            width: 'auto',
            height: '100%'
          }
        }
      };
      return v(
        <div vStyle={styles.container}>
          <LinkNav />
        </div>
      );
    };


    const Icons = () => {
      const styles = {
        container: {
          float: 'left',
          width: '100%',
          paddingTop: '1rem',
          '@media (min-width: 40em)': { width: '50%' },
        }
      };
      return v(
        <div vStyle={styles.container}>
          <IconWrapper />
        </div>
      );
    };


    const Root = () => {
      const styles = {
        global: {
          fontFamily: "'CalibreRegular', sans-serif",
          backgroundColor: activeTheme.background,
          color: activeTheme.color,
          transition: 'all .4s ease'
        },
        inner: {
          width: '91.66%',
          margin: '0 auto',
          overflow: 'hidden'
        }
      };
      return v(
        <div vStyle={styles.global}>
          <div vStyle={styles.inner}>
            <Nav />
            <Readme />
            <Icons />
          </div>
          <Footer />
        </div>
      );
    };


    return (
      <Root />
    );
  }
}
