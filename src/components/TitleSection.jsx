import React from 'react'

export default function TitleSection({title}) {
  return (
    <div className='flex justify-center py-20'>
      <div className='text-center px-[20%] max-w-[720px]'>
        <h2 className='uppercase text-6xl'>{title}</h2>
        <div className='flex justify-center'>
          <hr className='h-2 w-20 bg-gray-500 my-6'/>
        </div>
        
      </div>
    </div>
    
  )
}
