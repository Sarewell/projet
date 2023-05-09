import React from 'react'

import { GrFacebookOption, GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";

export default function Footer() {
  return (
    <div className='bg-gray-700 flex justify-center items-center'>
      <div className='text-center'>
        <a href="">fleche</a>
        <div className='flex gap-10 text-white text-8xl my-12'>
          <GrFacebookOption className='p-4 bg-gray-600'/>
          <GrLinkedinOption className='p-4 bg-gray-600'/>
          <GrInstagram className='p-4 bg-gray-600'/>
          <GrGithub className='p-4 bg-gray-600'/>

        </div>
        <p className='uppercase text-gray-300 mb-8'>libois nicolas <span className='text-rose-800'>@ 2023</span></p>
      </div>
      
    </div>
  )
}
