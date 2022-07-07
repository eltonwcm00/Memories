// Custom input

import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({half, name, handleChange, label, autoFocus, type, handleShowPassword}) => { //some of the txt input will be 6, while other is set to be 12
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
          name = {name}
          onChange = {handleChange}
          variant="outlined"
          required
          fullWidth
          label={label}
          autoFocus={autoFocus}
          type={type}
          //hide || unhide passwords
          InputProps={name === 'password' ? {  //if input type is 'password' and the eye icon is being clicked
                                               //then show the visibility of password, otherwise visibility is off
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          } : null} 
      />
    </Grid>
  )
}

export default Input;
