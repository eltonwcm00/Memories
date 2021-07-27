import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';

// Fetch data from global Redux store
import { useSelector } from 'react-redux';

const Posts = () => {
    
    const materialUI = useStyles();

    //state.posts, use reducer named posts from ../../reducer/index
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    
    return (
        <> {/* Fragment div*/}
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;