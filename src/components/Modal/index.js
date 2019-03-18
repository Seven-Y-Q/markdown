import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import OutsideHandleClick from '../OutsideHandleClick';
import { hideModal } from '../../action';
import './index.css';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('paste', (event) => {
      var items = event.clipboardData.items;
      Array.prototype.slice.apply(items).forEach((item, index) => {
          if (this.isImg(item)) {
              var fileReader = new FileReader();
              var file = item.getAsFile();
              fileReader.onloadend = (e) => {
                  var url = '';
                  url = e.target.result || fileReader.result;
                  let img = new Image();
                  img.src = url;
                  this.setState({
                    value: url
                  });
                  let div = document.createElement("div");
                  div.className = 'image';
                  div.appendChild(img);
                  document.querySelector('.image').replaceWith(div);
                  img.onload = () => {

                  }
              }
              fileReader.readAsDataURL(file);
          }
      })
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isShowModal !== this.props.isShowModal) {
      this.setState({
        value: ''
      });
    }
  }

  isImg = (item) => {
    return item.kind === 'file' && item.type.indexOf('image/') !== -1;
  }

  onClose = () => {
    this.props.hideModal();
  }

  onCopy = () => {
    this.myRef.current.select();
    document.execCommand("copy");
    this.props.hideModal();
  }

  handleOutsideClick = () => {
    this.props.hideModal();
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <div className={"modal fade bd-example-modal-lg" + (this.props.isShowModal ? ' show' : '')}>
          <OutsideHandleClick handleOutsideClick={this.handleOutsideClick}>
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{this.props.title}</h5>
                  <button type="button" className="close" onClick={this.onClose}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="image"><div className="information">Paste Image Here</div></div>
                  <textarea ref={this.myRef} className="form-control" onChange={this.onChange} value={this.state.value} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.onCopy}>Copy</button>
                </div>
              </div>
            </div>
          </OutsideHandleClick>
        </div>
        <div className={"modal-backdrop fade" + (this.props.isShowModal ? ' show' : '')}></div>
      </Fragment>
    );
  }
}

export default connect((state) => ({
  isShowModal: state.isShowModal
}), {
  hideModal
})(Modal);
