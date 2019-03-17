import React, { Component, Fragment } from "react";
import './index.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">Markdown</div>
        <button type="button" className="btn">New Document</button>
      </div>
    );
  }
}

export default Sidebar;
