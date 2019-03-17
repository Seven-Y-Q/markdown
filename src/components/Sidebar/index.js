import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { newDocment } from '../../action';
import './index.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.newDocment();
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">Markdown</div>
        <button type="button" className="btn" onClick={this.onClick}>New Document</button>
      </div>
    );
  }
}

export default connect(null, {
  newDocment
})(Sidebar);
