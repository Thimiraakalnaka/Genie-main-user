import React, { useEffect, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function RedNotify({errMsg,setErrMsg}) {
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    if(errMsg){
      setErrMsg(errMsg);
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
        setErrMsg("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  },[errMsg,setErrMsg])

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">

      <div className="fixed top-5 right-5 z-50 w-full max-w-sm overflow-hidden">
        <DialogPanel
          transition
          className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                <ErrorOutlineIcon aria-hidden="true" className="size-7 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  {errMsg}
                </DialogTitle>
              </div>
            </div>
          </div>
          <div className="bg-red-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              data-autofocus
              onClick={() => {setOpen(false);
                setErrMsg('');
              }}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Close
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}

export default RedNotify