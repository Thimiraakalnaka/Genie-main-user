import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Logo from '../assets/logo.jpg';
import Axios from 'axios';
import { useAuth } from './AuthContext';
import GreenNotify from './GreenNotify';
import RedNotify from './RedNotify';

const Login = ({open, setOpen,  toggleToRegister}) => {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[successMsg,setSuccessMsg]=useState("");
  const[errMsg,setErrMsg]=useState("");

  // const navigate = useNavigate();

    const {login} = useAuth();

    const handleonchange = (e) =>{
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email,
            password
        }
        Axios.post('http://localhost:8080/api/v1/login', loginData)
            .then(res => {
                console.log(res.data);
                login();
                setOpen(false);
                setSuccessMsg("Login Successfull")
                // navigate('/dashboard');
            })
            .catch(err => {
                console.error(err);
                setErrMsg("Email or Password is Invalid");
            });
    }
  

  return (
    <div>
        <Dialog open={open} onClose={()=>setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto mb-28 ">
        <div className="flex min-h-full items-end justify-center p-4 text-center ">
          <DialogPanel
            transition
            className="relative transform overflow-hidden w-[400px] rounded-[50px] bg-white border-[#06B2F6] border-4 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in  data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 py-5 ">
               
              <div className="">
                <div className="grid mt-3 text-center">
                  
                  <DialogTitle as="h3" className="font-bold text-[#06B2F6] text-3xl">
                  <div className='flex justify-center'>
                    <div className='w-40 h-auto'>
                      <img src={Logo} alt='logo' />
                    </div>
                  </div>
                    Sign in to your account
                  </DialogTitle>
                  <div className="grid py-5 mx-6">
                    <input className='bg-[#D9D9D9] my-2 h-8 rounded-md' placeholder='E mail' name='email' value={email} onChange={handleonchange}/>
                    <input className='bg-[#D9D9D9] my-2 rounded-md h-8' placeholder='Password' name='password'value={password} onChange={handleonchange}/>

                    <p className="font-medium text-[9px] text-gray-500 text-left mt-4">
                      By selecting Create personal account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.
                    </p>
                  </div>
                  <div>
                    <button className='bg-[#8DD4F1] w-48 h-6 text-center font-bold rounded-3xl mb-3' onClick={handleSubmit}>
                      Sign in
                    </button>
                    <h1 className="mb-10">
                          New to Genie?{' '}
                          <span
                            className="text-[#06B2F6] font-bold cursor-pointer"
                            onClick={() => toggleToRegister(true)}
                          >
                            Create account
                          </span>
                        </h1>

                  </div>
                </div>
              </div>
            </div>
            
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    {successMsg && <GreenNotify successMsg={successMsg} setSuccessMsg={setSuccessMsg} />}
     {errMsg && <RedNotify errMsg={errMsg} setErrMsg={setErrMsg}/>}
    </div>
  )
}

export default Login