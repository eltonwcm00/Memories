import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from './styles';

// Redux
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
    
    const materialUI = useStyles();

    // Redux
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    
    return (  
        <Container maxidth="lg">
            <AppBar position="static" color="inherit" className={materialUI.appBar}>
                <Typography variant="h2" align="center" className={materialUI.heading}>
                    Memories
                </Typography>
                <img src={memories} alt="memories" height="60" className={materialUI.image}/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch"
                        spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>  
                </Container>
            </Grow>
        </Container>  
    );
}

export default App;