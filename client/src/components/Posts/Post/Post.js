import React from 'react';
import moment from 'moment';

import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


const Post = (props) => {
    
    const materialUI = useStyles();
    const post = props.post;
    
    return (
        <Card className={materialUI.card}>
            <CardMedia className={materialUI.media} image={post.selectedFile} title={post.title} />
            <div className={materialUI.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={materialUI.overlay2}>
                 <Button style={{color: 'white'}} size="small" onClick={() => {}}>
                    <MoreHorizIcon fontSize="default" />
                 </Button>  
            </div>
            <div className={materialUI.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `# ${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={materialUI.titile} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent> 
            <CardActions className={materialUI.cardActions}>
                <Button size="small" color="primary" onClick={() =>{}}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
                <Button size="small" color="primary" onClick={() => {}}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions> 
        </Card>
    );
}

export default Post;