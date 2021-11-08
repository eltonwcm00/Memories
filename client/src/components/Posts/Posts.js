import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
// Fetch data from global Redux store
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  
  //state.posts, use reducer named posts from ../../reducer/index
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    /* loading screen if no post */
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
