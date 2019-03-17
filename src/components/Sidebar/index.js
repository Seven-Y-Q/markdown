import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { newDocment, getDocment } from '../../action';
import './index.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowList: false,
      index: -1
    }
  }

  onClick = () => {
    this.props.newDocment();
  }

  onShowList = () => {
    this.setState((prevState) => ({
      isShowList: !prevState.isShowList
    }))
  }

  onSelectDoc = (id, docName, index) => (e) => {
    this.setState({
      index
    });
    this.props.getDocment({id, docName});
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-title">Markdown</div>
        <div className="sidebar-list">
          <div className="sidebar-list-name" onClick={this.onShowList}>Documents<span className="dropdown-toggle"></span></div>
          {this.state.isShowList &&
            <ul>
              {this.props.list.map((item, index) => <li key={item.id} onClick={this.onSelectDoc(item.id, item.docName, index)} className={this.state.index === index ? 'active' : ''}>{item.docName}</li>)}
            </ul>
          }
        </div>
        <button type="button" className="btn" onClick={this.onClick}>New Document</button>
      </div>
    );
  }
}

export default connect((state) => ({
  list: state.list
}), {
  newDocment,
  getDocment
})(Sidebar);
