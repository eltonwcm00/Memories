import React, { useState, useEffect} from 'react'
import { Container, Grow, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from '../../styles';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    
 /* Share the state to its child component Form.js and Posts.js */
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
    
    return (
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}

export default Home;