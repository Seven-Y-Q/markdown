import React, { Component, Fragment } from "react";

class OutsideHandleClick extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', (e) => {
      if(!this.myRef.current.contains(e.target)) {
        this.props.handleOutsideClick();
      }
    })
  }

  render() {
    return (
      <div ref={this.myRef}>{this.props.children}</div>
    );
  }
}

export default OutsideHandleClick;
