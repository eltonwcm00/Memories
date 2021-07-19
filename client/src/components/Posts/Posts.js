import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    
    const materialUI = useStyles();
    
    return (
        <> {/* Parents div*/}
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
}

export default Posts;