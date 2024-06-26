import React, { useState } from 'react'
import '../Pages/CSS/Loginsignup.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const LoginSignup = () => {
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
  const register=async(e)=>{
    e.preventDefault()
    const {name,email,password}=data;
    try {
      const response=await axios.post('/register',{name,email,password})
      if(response.data.error){
        toast(response.data.error)
      }
      else{
        setData({
          name:'',
          email:'',
          password:''
        });
        toast.success("Registered Successfully");
        navigate('/loginpage')
        
      }
      
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <form onSubmit={register}>
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-page">
          <input type="text" placeholder='Your Name' name="name" value={data.name} onChange={handleChange}/>
          <input type="email" name="email" id="myname" placeholder='Your Mail ID' value={data.email} onChange={handleChange}/>
          <input type="password"  name="password" placeholder='Your Password' value={data.password} onChange={handleChange}/>
        </div>
        <button>Continue</button>
        <div className="loginsignup-agree">
          <input type="checkbox" name="checkbox" id="check" />
          <p>By continuing I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
    </form>
  )
}

export default LoginSignup