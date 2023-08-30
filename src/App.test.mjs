import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App.mjs';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(React.createElement(App, null), div);
});


