import React, {useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles'
import Input from './Input';

const Auth = () => {
    
    const classes = useStyles();
    //visibility of password
    const [showPassword, setShowPassword] = useState(false);
    //sign up / sign in txt
    const [isSignup, setIsSignup] = useState(false);

    const handleSubmit = () => {
      
    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        //reset it
        handleShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword( (prevShowPassword) => !prevShowPassword ); //if off, turn on, if on, turn off

    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {
                /* if it is signed up, show the form input 31:54 */
                isSignup && ( 
                  <>
                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                    <Input name="firstName" label="First Name" handleChange={handleChange} half />
                  </>
                )
              }
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              {/*if icon is clicked (show pass), type of input field is "text", otherwise "password"*/}
              <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
              {/*confirm field only will be shown in the sign up form, not sign in form*/}
              {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              {/*if it is in sign up form, show sign up button, otherwise sign in button is shown*/}
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? 'Already have an account? Sign in' : "Don't have account? Sign up"}
                </Button>
              </Grid>
            </Grid>
          </form> 
        </Paper>
      </Container>
    )
}

export default Auth;
