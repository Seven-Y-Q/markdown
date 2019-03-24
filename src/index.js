import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Sidebar from './components/Sidebar';
import Markdown from './components/Markdown';
import Header from './components/Header';
import Modal from './components/Modal';
import GithubUser from './components/GithubUser';
import store from './store';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Modal title="Image To Base64" />
          <Sidebar />
          <Router>
            <Header />
            <Route path='/' exact component={Markdown} />
            <Route path='/search-user' exact component={GithubUser} />
          </Router>
        </Fragment>
      </Provider>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
