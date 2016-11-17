import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/components/App';
import UserPage from './frontend/components/UserPage';
import NoMatch from './frontend/components/NoMatch';
import './css/index.css';
import {Router, Route, browserHistory} from  'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="user" component={UserPage}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('root')
);
