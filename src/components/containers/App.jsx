import React, { Component } from 'react';
import HomePage from './HomePage';
import { Layout, Header, Navigation, IconButton, Menu, MenuItem, Textfield } from 'react-mdl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions/postActions';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const dialogs = document.querySelector("dialog"); dialogs && dialogPolyfill.registerDialog(dialogs);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(e) {
    this.props.setQuery(e.target.innerText);
  }

  render() {
    console.log("State", this.state);
    return (
      <Layout fixedHeader>
        <Header title="Reddit PWA" scroll>
          <div style={{position: 'relative'}}>
              <IconButton name="more_vert" id="demo-menu-lower-right" />
              <Menu target="demo-menu-lower-right" align="right">
                  <MenuItem onClick={this.handleQuery}>hot</MenuItem>
                  <MenuItem onClick={this.handleQuery}>technology</MenuItem>
                  <MenuItem onClick={this.handleQuery}>todayilearned</MenuItem>
                  <MenuItem onClick={this.handleQuery}>news</MenuItem>
                  <MenuItem onClick={this.handleQuery}>explainlikeimfive</MenuItem>
                  <MenuItem onClick={this.handleQuery}>cats</MenuItem>
                  <MenuItem onClick={this.handleQuery}>showerthoughts</MenuItem>
              </Menu>
          </div>
        </Header>
        { this.props.children }
      </Layout>
    );
  }
};

function mapStateToProps(state) {
  return {
    query: state.query.query,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
