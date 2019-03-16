import React from "react";
import ReactDOM from "react-dom";
// import showdown from "showdown";
import MarkdownIt from "markdown-it";
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';


// let converter = new showdown.Converter();
// console.log(converter.makeHtml('# hello, markdown!'));

let md = MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});
// let md = new MarkdownIt();
console.log(md.render('# markdown-it rulezz!'));

function createMarkup() {
  return {__html: 'First &middot; Second'};
}


class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      html: {
        __html: ''
      }
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
      html: {
        __html: md.render(e.target.value)
      }
    })
  }

  render() {
    return (
      <div>
        <textarea value={this.state.value} onChange={this.onChange} />
        <div dangerouslySetInnerHTML={this.state.html}/>
      </div>);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
