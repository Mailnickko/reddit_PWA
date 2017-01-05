import React from 'react';
import { List, ListItem, ListItemAction, ListItemContent, Icon } from 'react-mdl';
import Moment from 'moment';

const AppList = ({ post }) => {
  const { title, author, url } = post;
  const thumbnail = post.thumbnail === 'self' || post.thumbnail === '' || post.thumbnail === 'default' || post.thumbnail === 'image' ? 'https://a.thumbs.redditmedia.com/pKBvmOro58ltZC9Cs2WoHR605OXga74h0FFemZZlcs4.png' : post.thumbnail;
  // const created = new Date(post.created * 1000).toLocaleString();
  const created = Moment(post.created_utc*1000).format('LLL');

  return (
      <a href={url}>
        <ListItem threeLine style={styles.container}>
          <img style={styles.image} src={thumbnail} />
            <ListItemContent subtitle={title}>
              <span style={styles.content}>{author} - Posted: {created}</span>
            </ListItemContent>
        </ListItem>
      </a>
  );
}

const styles = {
  container: {
    border: '1px solid black',
    'backgroundColor': '#FAFAFA',
    height: '120px',
    paddingLeft: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  image: {
    'paddingRight': '15px',
    width: '30%'
  },
  content: {
    textDecoration: 'underline',
    fontSize: '16px',
    fontWeight: 500
  }
}

export default AppList;
