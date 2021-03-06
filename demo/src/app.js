import React, { Component } from 'react';
import { render } from 'react-dom';
import readme from '../../README.md';
import { icons, Moodycon } from '../../src/moodycons';
import { themes } from './data';
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
      'a': {
        display: 'none'
      },
      'ul': {
        padding: '0rem',
        marginTop: '0.3rem'
      },
      'li': {
        lineHeight: 1.5
      },
      'h2': {
        marginTop: '3rem',
        marginBottom: '0.5rem',
        fontSize: '2.2rem'
      },
      'p': {
        marginTop: 0,
        marginBottom: '0.5rem'
      },
      'pre': {
        borderLeft: '3px solid currentColor',
        paddingLeft: '0.5rem',
        marginTop: '0.3rem',
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
      padding: '.75rem 1rem',
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
      width: '1rem',
      height: '1rem',
      transition: 'background-color .4s ease'
    },
    name: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textTransform: 'capitalize'
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
    },
  });
  if (props.list) {
    return (
      <div>
        {props.themeNavOpen &&
          themes.map((theme, i) => {
            const color = { backgroundColor: theme.color };
            return (
              <div key={i}
                className={styles.item}
                onClick={props.closeNav.bind(this, theme)}>
                <span className={styles.circle} style={color}></span>
                <span className={styles.name}>{theme.name}</span>
              </div>
            );
          })
        }
      </div>
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
      <small className={styles.eyelash}>{'Color waves'}</small>
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


const Icon = ({ width = 50, height = 50, fill, name }) => {
  const styles = v({
    wrapper: {
      boxSizing: 'border-box',
      textAlign: 'center',
      float: 'left',
      padding: '2rem',
      width: '50%',
      '@media (min-width: 52em)': { width: '33.3%' },
      '@media (min-width: 76em)': { width: '25%' }
    },
    text: {
      margin: '0rem',
      fontWeight: 'normal',
    }
  });
  return (
    <div className={styles.wrapper}>
      <Moodycon
        width={width}
        height={height}
        fill={fill}
        name={name}
      />
      <h5 className={styles.text}>{name}</h5>
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
      {Object.keys(icons).map((icon) => (
        <Icon key={icon.name} name={icon} />
      ))}
    </div>
  );
};


class App extends Component {

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

    const activeTheme = (() => themes.find(t => this.state.theme === t.name))();

    const styles = v({
      global: {
        fontFamily: "'CalibreRegular', sans-serif",
        backgroundColor: activeTheme.background,
        boxShadow: `0 0 0 10px ${activeTheme.background}`,
        color: activeTheme.color,
        transition: 'all .4s ease',
        'h2': {
          fontWeight: 'normal',
        },
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


render(
  <App />,
  document.getElementById('app')
);
