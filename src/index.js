import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';

import Sidebar from './components/Sidebar';
import Markdown from './components/Markdown';
import Header from './components/Header';
import store from './store';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Sidebar />
          <Header />
          <Markdown />
        </Fragment>
      </Provider>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
