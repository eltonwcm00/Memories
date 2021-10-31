import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';
import { Grid, CircularProgress } from '@material-ui/core';

// Fetch data from global Redux store
import { useSelector } from 'react-redux';

const Posts = () => {
    
    const materialUI = useStyles();

    //state.posts, use reducer named posts from ../../reducer/index
    const posts = useSelector((state) => state.posts);
    
    return (
        
        /* loading screen if no post */
        !posts.length ? <CircularProgress /> : (
            <Grid className={materialUI.container} container alignItems="stretch" spacing={3}>
               {
                posts.map((post) => (
                    <Grid item key={post.id} xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
                ))
               } 
            </Grid>
        )
    );
}

export default Posts;