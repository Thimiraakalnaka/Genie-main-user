import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Logo from '../assets/logo.jpg';
import Register from './Register';

const Login = ({open, setOpen}) => {
  const [showRegister, setShowRegister] = useState(false);

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
            {showRegister ? (
                  <Register open={open} setOpen={setOpen} />
                ) : (
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
                    <input className='bg-[#D9D9D9] my-2 h-8 rounded-md' placeholder='E mail'/>
                    <input className='bg-[#D9D9D9] my-2 rounded-md h-8' placeholder='Password'/>

                    <p className="font-medium text-[9px] text-gray-500 text-left mt-4">
                      By selecting Create personal account, you agree to our User Agreement and acknowledge reading our User Privacy Notice.
                    </p>
                  </div>
                  <div>
                    <button className='bg-[#8DD4F1] w-48 h-6 text-center font-bold rounded-3xl mb-3'>
                      Sign in
                    </button>
                    <h1 className="mb-10">
                          New to Genie?{' '}
                          <span
                            className="text-[#06B2F6] font-bold cursor-pointer"
                            onClick={() => setShowRegister(true)}
                          >
                            Create account
                          </span>
                        </h1>

                  </div>
                </div>
              </div>
                )}
            </div>
            
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </div>
  )
}

export default Login