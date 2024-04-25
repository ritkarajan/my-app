import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const[inputs,setInputs]=useState({})
    const navigate=useNavigate();
    const inputHandler=(e)=>{
      setInputs({...inputs,[e.target.name]:e.target.value})
      console.log("textfield",inputs)
    }
    const SubmitHandler=()=>{
        console.log("btn clicked",inputs)
        axios.post("http://localhost:3008/api/login",inputs)
        .then((res)=>{
            console.log(res);
          
            alert(res.data.message);
            if(res.data.message==="loged in successfully"){
              const userId=res.data.person._id;
              sessionStorage.setItem("id",userId)
              navigate('/view');
            }
            })
       }
    
  return (
    <div style={{margin:'12%'}}>
      <Typography variant='h4' style={{color:'purple'}}>LOGIN FORM</Typography>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="Username" name='username' onChange={inputHandler}></TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
            <TextField variant='outlined' label="Password"  name='password' onChange={inputHandler}></TextField>
        </Grid>
         <Grid item xs={12} sm={12} md={12}>
            <Button variant='contained' color='secondary' onClick={SubmitHandler}>LOGIN</Button>
         </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Link to={'/sign'}>New Users Click Here</Link>
          </Grid>
      </Grid>
    </div>
  )
}

export default Login
