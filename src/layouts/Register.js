import React, { useEffect, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Logo from '../assets/logo.jpg';
import Axios from 'axios';
import GreenNotify from './GreenNotify';

const Register = ({open, setOpen, toggleToLogin}) => {

  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[cpassword,setCpassword]=useState("");
  const[showFormMsg,setShowFormMsg]=useState({
    fname : "",
    lname : "",
    email : "",
    password: ""
  });
  const[successMsg,setSuccessMsg]=useState("");


  const registerUser = () => {
    if(validate()){
  
      const payload = {
        firstname: fname,
        lastname: lname,
        email: email,
        password: password
      }
  
      Axios.post('http://localhost:8080/api/v1/adduser',payload)
        .then(()=>{
          clearForm();
          setTimeout(() => toggleToLogin(true), 3000);
          setSuccessMsg("Registration succuessfull !")
        }).catch((error)=>{
          console.log("Axios error user regiter : ", error);
        })

    }

    
  }


  function validate(){

    const newFormMsg ={ fname:'',lname:'',email:'',password:'',cpassword:''};
    const regex=/\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

    let isVlaid = true;

    if(!fname){
      newFormMsg.fname = "First name is requird";
      isVlaid = false;
    }

    if(!lname){
      newFormMsg.lname = "Last name is requird";
      isVlaid = false;
    }

    if(!email){
      newFormMsg.email = "Email is requird";
      isVlaid = false;
    }else if(!regex.test(email)){
      newFormMsg.email = "Email format invalid";
      isVlaid = false;
    }

    if(!password){
      newFormMsg.password = "password is requird";
      isVlaid = false;
    }else if(password.length < 8){
      newFormMsg.password = "Password must be at least 8 characters";
      isVlaid = false;
    }
    else if(!passwordRegex.test(password)){
      newFormMsg.password= "include uppercase, lowercase, a number, and a special character.";
      isVlaid = false;
    }

    if(!cpassword){
      newFormMsg.cpassword = "Confirm password is required";
      isVlaid = false;
    }
    else if(password !== cpassword){
      newFormMsg.cpassword = "password do not match";
      isVlaid = false;
    }
    setShowFormMsg(newFormMsg);
    return isVlaid;
  }

  function clearForm(){
    setFname('');
    setLname('');
    setEmail('');
    setPassword('');
    setCpassword('');
  }

  return (
    <div>
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto mb-14">
          <div className="flex min-h-full items-end justify-center p-4 text-center">
            <DialogPanel
              transition
              className="relative transform overflow-hidden w-[450px] rounded-[50px] bg-white border-[#06B2F6] border-4 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 py-5">
               
                <div className="grid mt-1 text-center">
                  <DialogTitle as="h3" className="font-bold text-[#06B2F6] text-3xl">
                    <div className="flex justify-center">
                      <div className="w-40 h-auto">
                        <img src={Logo} alt="logo" />
                      </div>
                    </div>
                    Create an account
                  </DialogTitle>
                  <div className="grid py-5 mx-6">
                    <div className='flex gap-2'>
                      <div className='flex flex-col w-[50%]'>
                      <input className="bg-[#D9D9D9] my-2 h-8 rounded-md" placeholder="First Name" value={fname} onChange={(e)=>{setFname(e.target.value)}} />
                      <p className='text-red-600 text-left'>{showFormMsg.fname}</p>
                      </div>
                      <div className='flex flex-col w-[50%]'>
                      <input className="bg-[#D9D9D9] my-2 h-8 rounded-md" placeholder="Last Name" value={lname} onChange={(e)=>{setLname(e.target.value)}} />
                      <p className='text-red-600 text-left'>{showFormMsg.lname}</p>
                      </div>
                      
                    </div>
                    <input className="bg-[#D9D9D9] my-2 h-8 rounded-md" placeholder="E-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <p className='text-red-600 text-left'>{showFormMsg.email}</p>
                    <input className="bg-[#D9D9D9] my-2 h-8 rounded-md" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <p className='text-red-600 text-left'>{showFormMsg.password}</p>
                    <input className="bg-[#D9D9D9] my-2 h-8 rounded-md" placeholder="Confirm Password" value={cpassword} onChange={(e)=>{setCpassword(e.target.value)}}/>
                    <p className='text-red-600 text-left'>{showFormMsg.cpassword}</p>
                    <p className="font-medium text-[9px] text-gray-500 text-left mt-4">
                      By selecting Create personal account, you agree to our User Agreement and acknowledge
                      reading our User Privacy Notice.
                    </p>
                  </div>
                  <div>
                    <button
                      className="bg-[#8DD4F1] w-48 h-6 text-center font-bold rounded-3xl mb-3"
                      onClick={registerUser}
                    >
                      Register
                    </button>
                    <h1 className="mb-10">
                      Already have an account?{' '}
                      <span
                        className="text-[#06B2F6] font-bold cursor-pointer"
                        onClick={() => toggleToLogin(true)}
                      >
                        Sign in
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
     {successMsg && <GreenNotify successMsg={successMsg} setSuccessMsg={setSuccessMsg} />}
    </div>
  )
}

export default Register