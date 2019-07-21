import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});
