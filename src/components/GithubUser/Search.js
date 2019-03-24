import React, { Component } from "react";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleSearch = () => {
    this.props.handleSearch(this.state.name);
    this.setState({
      name: ""
    });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="github's username"
          aria-label="github's username"
          aria-describedby="button-addon2"
          value={name}
          onChange={this.handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={this.handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
