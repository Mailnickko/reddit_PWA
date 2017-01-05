import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { List, ListItem, ListItemAction, ListItemContent, Icon } from 'react-mdl';

import AppList from '../presentational/AppList';
import * as actions from '../../actions/postActions';

class HomePage extends Component {

  componentWillMount() {
    this.props.getPosts(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) {
      this.props.getPosts(nextProps.query);
    }
  }

  handleQuery(e) {
    this.props.setQuery(e.target.innerText);
  }

  render() {
    const subreddit = this.props.query === '' ? 'new' : this.props.query;
    if (this.props.posts.posts.length) {
      return (
        <div>
          <h4 style={{textAlign: 'center'}}>Results from r/{subreddit}</h4>
          <div style={homeStyles}>
            <List>
              { this.props.posts.posts.map((post, i) =>
                  <AppList
                    key={i}
                    post={post.data}
                  />
              )}
            </List>
          </div>
        </div>
      );
    } else {
      return <h4>Loading Posts...</h4>
    }
  }
};

const homeStyles = {
  width: '80%',
  margin: '0 auto'
}

function mapStateToProps(state) {
  return {
    query: state.query.query,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
