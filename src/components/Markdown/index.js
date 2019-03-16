import React, { Component, Fragment } from "react";
import MarkdownIt from "markdown-it";
import hljs from 'highlight.js';
import { connect } from 'react-redux';
import _ from 'lodash';
import 'highlight.js/styles/github.css';

import './Markdown.css';

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
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
      html: {
        __html: md.render(e.target.value)
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="editor">
            <textarea value={this.state.value} onChange={this.onChange} />
          </div>
          <div className="preview">
            <div dangerouslySetInnerHTML={this.state.html}/>
          </div>
        </div>
      </Fragment>);
  }
}

export default connect(
  (state) => ({
    current: state.current
  }), {}
)(Markdown);
