import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const Signup = () => {
    const [inputs,setInputs]=useState({});

       const inputHandler = (e)=>{
        console.log(e)
        setInputs({...inputs,[e.target.name]:e.target.value})
        console.log(inputs)
       } 

       const SubmitHandler=()=>{
        console.log("btn click",inputs);
axios.post("http://localhost:3008/api/post",inputs)
.then((res)=>{
    console.log(res);
    alert(res.data.message);
})
       }
      return (
    <div style={{margin:"10%"}}>
      <Typography variant='h4' style={{color:"purple"}}>SIGNUP FORM </Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined'  name='name'  label='Name' fullWidth 
            onChange={inputHandler}></TextField>

        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' name='email' label='Email' fullWidth onChange={inputHandler}></TextField>

        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined'  name='address'  label='Address' fullWidth multiline rows={5} onChange={inputHandler}></TextField>

        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined' name='username' label='Username' fullWidth onChange={inputHandler}></TextField>

        </Grid>
        <Grid item xs={12} sm={6} md={6}>
            <TextField variant='outlined'  name='password'  label='Password' fullWidth onChange={inputHandler}></TextField>

        </Grid>
         <Grid item xs={12} sm={12} md={12}>
            <Button variant='contained' color='secondary' onClick={SubmitHandler}>Submit</Button>
         </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Link to={'/'}>Back to Login</Link>
          </Grid>

      </Grid>
          </div>
  )
}

export default Signup
