import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import OutsideHandleClick from '../OutsideHandleClick';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
    this.myRef = React.createRef();
  }

  onToggleDropdown = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow
    }));
    this.props.history.push('/');
  }

  onSelect = (item) => (e) => {
    this.props.onSelect(item);
  }

  handleOutsideClick = () => {
    this.setState({
      isShow: false
    })
  }

  render() {
    const { type, name, options } = this.props;
    const { isShow } = this.state;
    let Tag = type === 'link' ? 'a' : 'button';
    return (
      <OutsideHandleClick handleOutsideClick={this.handleOutsideClick}>
        <div className={(type === 'link' && 'nav-item ') + 'dropdown' + (isShow ? ' show' : '')} onClick={this.onToggleDropdown}>
          <Tag className={(type === 'link' && 'nav-link ') + 'dropdown-toggle'}>
            {name}
          </Tag>
          <div className={'dropdown-menu' + (isShow ? ' show' : '')}>
            {options.map((item, index) => <a className="dropdown-item" key={index} onClick={this.onSelect(item)}>{item}</a>)}
          </div>
        </div>
      </OutsideHandleClick>
    );
  }
}

export default withRouter(Dropdown);
