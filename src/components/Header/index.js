import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import Dropdown from '../Dropdown';
import { showExample, toggleSidebar, getAllDocments, showModal } from '../../action';
import './index.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isSidebarOpen !== this.props.isSidebarOpen) {
      document.querySelector('#app').classList.toggle('open-sidebar');
      this.props.history.push('/');
    }
  }

  onSelect = (item) => {
    this.props.showExample({key: item})
  }

  print = () => {
    window.print();
  }

  onToggle = () => {
    const { toggleSidebar, getAllDocments } = this.props;
    toggleSidebar();
    getAllDocments();
  }

  showModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.showModal();
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg justify-content-between">
        <button className="navbar-toggler" type="button" onClick={this.onToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Markdown</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Dropdown type="link" name="Examples" options={['Bootstrap', 'React', 'Vue']} onSelect={this.onSelect} />
            <li className="nav-item">
              <a className="nav-link" onClick={this.showModal}>Image To Base64</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="search-user">Search user</Link>
            </li>
          </ul>
        </div>
        {this.props.current &&
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={this.print}>Save as PDF</a>
            </li>
          </ul>
        }
      </nav>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    current: state.current,
    isSidebarOpen: state.isSidebarOpen
  }), {
    showExample,
    toggleSidebar,
    getAllDocments,
    showModal
  }
)(Header));
