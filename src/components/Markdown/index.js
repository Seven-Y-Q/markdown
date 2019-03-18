import React, { Component, Fragment } from "react";
import MarkdownIt from "markdown-it";
import hljs from 'highlight.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'highlight.js/styles/github.css';

import { setMarkdown, setDocName, saveDocment } from '../../action'
import './index.css';

let md = MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return '';
  }
});

md.renderer.rules.table_open = function() {
  return '<table class="table table-striped">\n';
}

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      docName: '',
      html: {
        __html: ''
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(nextProps.current, this.props.current)) {
      this.setState({
        value: nextProps.current,
        html: {
          __html: md.render(nextProps.current)
        }
      })
    }
    if (nextProps.docName !== this.props.docName) {
      this.setState({
        docName: nextProps.docName
      })
    }
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      html: {
        __html: md.render(e.target.value)
      }
    });
    this.props.setMarkdown(e.target.value);
  }

  onNameChange = (e) => {
    this.setState({
      docName: e.target.value
    });
    this.props.setDocName(e.target.value);
  }

  onSave = () => {
    saveDocment();
  }

  render() {
    const { current, docName } = this.props;
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="doc-name">
            <div className="title justify-content-between">
              <span>DOCUMENT NAME</span>
              {current && docName && <button className="btn" onClick={this.onSave}>Save</button>}
            </div>
            <input placeholder="please input your docment name" value={this.state.docName} onChange={this.onNameChange} />
          </div>
          <div className="main">
            <div className="editor">
              <div className="title"><span>Markdown Editor</span></div>
              <textarea value={this.state.value} onChange={this.onChange} />
            </div>
            <div className="preview">
              <div className="title"><span>Preview</span></div>
              <div dangerouslySetInnerHTML={this.state.html}/>
            </div>
          </div>
        </div>
      </Fragment>);
  }
}

export default connect(
  (state) => ({
    current: state.current,
    docName: state.docName,
    db: state.db
  }), {
    setMarkdown,
    setDocName,
    saveDocment
  }
)(Markdown);
