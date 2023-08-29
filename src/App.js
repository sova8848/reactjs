const React = require('react');
const { Component } = require('react');
require('./App.css');

const Logo = () => {
  return (
    React.createElement('div', null,
      React.createElement('img', { src: 'src/logo.svg', alt: 'Logo' })
    )
  );
};

class App extends Component {
  render() {
    return (
      React.createElement('div', { className: 'App' },
        React.createElement('header', { className: 'App-header' },
          React.createElement('img', { src: Logo, className: 'App-logo', alt: 'logo' }),
          React.createElement('h1', { className: 'App-title' }, 'Welcome to React')
        ),
        React.createElement('p', { className: 'App-intro' },
          "To get started, edit ",
          React.createElement('code', null, 'src/App.js'),
          " and save to reload."
        )
      )
    );
  }
}

module.exports = {
  App: App,
  Logo: Logo
};
