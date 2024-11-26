import React from 'react'
import CoverImg from '../assets/cover.jpg'

const Cover = () => {
  return (
    <div className='relative text-white'>
        <div className='flex items-center justify-center mx-auto'>
            <img className='w-[80%] h-[400px] object-cover rounded-2xl' src={CoverImg} alt=''></img>
        </div>
        <div className='grid items-start justify-start ml-[200px] text-left absolute z-10 top-5 bottom-5 '>
            <h1 className='text-7xl font-bold w-[500px]'>Buy now pay easy with Genie</h1>
            <p className='text-5xl font-bold w-[700px]'>split the cost into 3 easy interest free </p>
        </div>
    </div>
  )
}

export default Cover