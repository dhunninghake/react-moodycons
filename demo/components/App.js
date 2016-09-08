import React, { Component } from 'react';
import IconWrapper from './IconWrapper';
import readme from '../../README.md';
import { themes } from '../data';
import v from 'vudu';


const Readme = () => {
  const styles = v({
    container: {
      float: 'left',
      width: '100%',
      '@media (min-width: 40em)': { width: '50%' },
      '@media (min-width: 64em)': { width: '33.3%' },
    },
    readme: {
      '>> a': {
        display: 'none'
      },
      '>> ul': {
        padding: '0rem',
        maring: '0rem'
      },
      '>> h2': {
        marginTop: '3rem',
        marginBottom: '0.4rem',
        fontSize: '2rem'
      },
      '>> p': {
        marginTop: 0,
        marginBottom: '0.5rem'
      },
      '>> pre': {
        borderLeft: '3px solid currentColor',
        paddingLeft: '0.5rem',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem'
      }
    }
  });
  return (
    <div className={styles.container}>
      <div className={styles.readme} dangerouslySetInnerHTML={{__html: readme}}></div>
    </div>
  );
};


const Footer = () => {
  const styles = v({
    container: {
      textAlign: 'center',
      paddingTop: '4rem',
      paddingBottom: '4rem'  
    },
    text: {
      paddingBottom: '4rem'
    },
    link: {
      color: 'currentColor',
      display: 'inline-block',
      paddingLeft: '2px'
    }
  });
  return (
    <div className={styles.container}>
      <p className={styles.text}>{'Made by '}
        <a className={styles.link} href='http://dhunninghake.com'>dhunninghake</a>
      </p>
    </div>
  );
};


const ThemeItem = (props) => {
  const styles = v({
    item: {
      backgroundColor: props.activeTheme.background,
      color: props.activeTheme.color,
      border: '1px solid currentColor',
      display: 'inline-block',
      marginTop: '-1px',
      padding: '.5rem',
      textAlign: 'left',
      cursor: 'pointer',
      position: 'relative',
      width: '8rem',
      zIndex: 1,
      transition: 'all .4s ease'
    },
    circle: {
      backgroundColor: props.activeTheme.color,
      display: 'inline-block',
      verticalAlign: 'middle',
      borderRadius: '50%',
      marginRight: '.5rem',
      position: 'relative',
      top: '2px',
      width: '1rem',
      height: '1rem',
      transition: 'background-color .4s ease'
    },
    name: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textTransform: 'capitalize',
      position: 'relative',
      top: '5px'
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
      top: '4px'
    },
  });
  if (props.list) {
    const themeList = themes.map((theme, i) => {
      const color = { backgroundColor: theme.color };
      return (
        <div key={i} 
          className={styles.item}
          onClick={props.closeNav.bind(this, theme)}>
          <span className={styles.circle} style={color}></span>
          <span className={styles.name}>{theme.name}</span>
        </div>
      );
    });
    return (
      <div>{props.themeNavOpen && themeList}</div>
    );
  } else {
    return (
      <div className={styles.item} onClick={props.toggleNav.bind(this)}>
        <div className={styles.itemLeft}>
          <span className={styles.circle}></span>
          <span className={styles.name}>{props.activeTheme.name}</span>
        </div>
        <div className={styles.itemRight}>
          <svg width="16" height="9" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g fill="currentColor" strokeWidth="1.5">
              <path d="M1.9 1.4 L8.1 7.6 L14.3 1.4"/>
            </g>
          </svg>
        </div>
      </div>
    );
  }
};


const Picker = (props) => {
  const styles = v({
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
      marginBottom: '0.5rem',
      '@media (min-width: 64em)': {
        display: 'block'
      }
    },
    list: {
      position: 'absolute',
      left: '0rem',
      bottom: '100%',
      textAlign: 'right',
      '@media (min-width: 64em)': {
        bottom: 'auto',
        top: '100%'
      }
    }
  });
  return (
    <div className={styles.container}>
      <small className={styles.eyelash}>{'See them in different color contexts'}</small>
      <ThemeItem {...props} />
      <div className={styles.list}>
        <ThemeItem {...props} list />
      </div>
    </div>
  );
};


const LinkNav = (props) => {
  const styles = v({
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
      color: 'currentColor',
      '@media (min-width: 64rem)': {
        margin: '0 0 0 1rem'
      }
    }
  });
  const tw = {
    root: 'https://twitter.com/intent/tweet',
    url:  'http://dhunninghake.com/react-moodycons',
    text: 'React%20Moodycons',
  };
  const linkData = [
    { 
      text: 'Npm', 
      link: 'https://www.npmjs.com/package/react-moodycons'
    },{ 
      text: 'Github', 
      link: 'https://github.com/dhunninghake/react-moodycons'
    },{ 
      text: 'Tweet', 
      link: `${tw.root}?text=${tw.text}&url=${tw.url}`
    }
  ];
  const links = linkData.map((link, i) => {
    return (
      <a key={i} 
        className={styles.links}
        href={link.link} 
        target='_blank'>
        {link.text}
      </a>
    );
  });
  return (
    <div>
      <div className={styles.container}>
        {links}
      </div>
      <Picker {...props} />
    </div>
  );
};


const Nav = (props) => {
  const styles = v({
    container: {
      backgroundColor: props.activeTheme.background,
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
        right: '4.17%',
        left: 'auto',
        bottom: 'auto',
        padding: '3rem 0 0 0',
        textAlign: 'right',
        width: 'auto',
        height: '100%'
      }
    }
  });
  return (
    <div className={styles.container}>
      <LinkNav {...props} />
    </div>
  );
};


const Icons = () => {
  const styles = v({
    container: {
      float: 'left',
      width: '100%',
      paddingTop: '1rem',
      '@media (min-width: 40em)': { width: '50%' },
    }
  });
  return (
    <div className={styles.container}>
      <IconWrapper />
    </div>
  );
};


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      theme: 'minimal',
      themeNavOpen: false
    };
  }

  closeNav(theme) {
    this.toggleNav();
    this.changeTheme(theme);
  }

  toggleNav() {
    this.setState({ themeNavOpen: !this.state.themeNavOpen });
  }

  changeTheme(theme) {
    this.setState({ theme: theme.name });
  }

  render() {

    const activeTheme = (() => themes.filter(t => this.state.theme === t.name)[0])();

    const styles = v({
      global: {
        fontFamily: "'CalibreRegular', sans-serif",
        backgroundColor: activeTheme.background,
        boxShadow: `0 0 0 10px ${activeTheme.background}`,
        color: activeTheme.color,
        transition: 'all .4s ease',
        '>> h2': {
          fontWeight: 'normal'
        }
      },
      inner: {
        width: '91.66%',
        margin: '0 auto',
        overflow: 'hidden'
      }
    });

    return (
      <div className={styles.global}>
        <div className={styles.inner}>
          <Nav 
            activeTheme={activeTheme} 
            toggleNav={this.toggleNav.bind(this)}
            closeNav={this.closeNav.bind(this)}
            themeNavOpen={this.state.themeNavOpen}
          />
          <Readme />
          <Icons />
        </div>
        <Footer />
      </div>
    );
  }
}
