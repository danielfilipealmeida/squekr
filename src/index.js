import React from 'react';
import ReactDOM from 'react-dom';
import App from './frontend/components/App';
import UserPage from './frontend/components/UserPage';
import MessageForm from './frontend/components/MessageForm';
import NoMatch from './frontend/components/NoMatch';
import './css/index.css';
import {Router, Route, browserHistory} from  'react-router';


var mainState = {};


(() => {
  mainState = {
      email: (sessionStorage.email === null) ? '' : sessionStorage.email,
      password: (sessionStorage.password === null) ? '' : sessionStorage.password,
      loggedin: (sessionStorage.loggedin === null) ? false : sessionStorage.loggedin
  };
})()
  
var updateMainState = (email, password, loggedin) => {
  mainState = {
    email: email,
    password: password,
    loggedin: loggedin
  }
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} mainState={mainState} onUpdateMainState={updateMainState}>
      <Route path="user" component={UserPage}/>
      <Route path="postMessage" component={MessageForm} mainState={mainState}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>,
  document.getElementById('root')
);

