import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/components/App';
import UserPage from './frontend/components/UserPage';
import MessageForm from './frontend/components/MessageForm';
import NoMatch from './frontend/components/NoMatch';
import './css/index.css';
import {Router, Route, browserHistory} from  'react-router';

var mainState = {
  email:'daniel@danielfilipea.net',
  password:'some_pass',
  loggedin:false
}


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} mainState={mainState}>
      <Route path="user" component={UserPage}/>
      <Route path="postMessage" component={MessageForm} mainState={mainState}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('root')
);
