import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    
    const materialUI = useStyles();
    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        creator: '',
        titlte: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        /* redux useDispatch */
        dispatch(createPost(postData));
    }
    
    const clear = () => {

    }
    
    return (
        <Paper className={materialUI.paper}>
            <form autoComplete="off" noValidate className={`${materialUI.root} ${materialUI.form}`} // Mulitple Material UI classes with template 
                  onSubmit={handleSubmit}>
                <Typography variant="h6">
                   Creating a Memory 
                </Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={postData.creator} 
                    // Use spread operator is to ensure all the field data is remained,
                    // Changing only the specific property, in this case = PROPERTIES "creator"
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title} 
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={materialUI.fileInput}>
                   <FileBase 
                        type="file"
                        multiple={false} 
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                   /> 
                </div>
                <Button className={materialUI.buttonSubmit} variant="contained" color="primary" size="large"
                        type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small"
                        onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
}

export default Form;