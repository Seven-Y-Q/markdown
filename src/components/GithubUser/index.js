import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from "./Search.js";
import Card from "./Card.js";
import Loading from "../Loading.js";
import { getUser } from '../../action';
import "./index.css";

class GithubUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: false,
      showResult: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== this.props.user) {
      this.setState({
        loading: false,
        showResult: true
      });
    }
  }
  handleSearch = (name) => {
    this.setState({
      loading: true,
      showResult: false
    });
    this.props.getUser({name});
  }
  render() {
    const { loading, showResult } = this.props;
    const user = this.props.user && this.props.user.message === "Not Found" ? null : this.props.user
    return (
      <div className="container-fluid search-wrap">
        <div className="container">
          <div className="mt-5 d-flex justify-content-center">
            <Search handleSearch={this.handleSearch} />
          </div>
          <div className="d-flex justify-content-center">
            {loading && <Loading />}
            {!loading && showResult && <Card user={this.props.user} />}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    user: state.user,
    loading: state.loading,
    showResult: state.showResult,
  }), {
    getUser
  }
)(GithubUser);
