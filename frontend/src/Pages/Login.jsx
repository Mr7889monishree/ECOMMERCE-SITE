import React from 'react'
import '../Pages/CSS/Loginsignup.css'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
const Login = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const LoginUser=async(e)=>{
    const {email,password}=data;
    try {
      const response=await axios.post('/login',{email,password})
      if(response.data.error){
        toast(response.data.error)
      }
      else{
        setData({
          email:'',
          password:''
        });
        toast.success("Logged in Successfully");
        navigate('/')
        
      }
      
    } catch (error) {
      console.log(error)
    }    
  }
  return (
    <form onSubmit={LoginUser}>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Log In</h1>
        <div className="loginsignup-page">
          <input type="email" name="email" id="myname" placeholder='Your Mail ID' value={data.email} onChange={handleChange}/>
          <input type="password"  name="password" placeholder='Your Password' value={data.password} onChange={handleChange}/>
        </div>
        <button>LogIn</button>
      </div>
    </div>
    </form>
  )
}

export default Login