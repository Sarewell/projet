import React from 'react'

export default function SkillBar({texte, chiffre, pourcentage}) {
  return (
    <div className='w-full my-2  flex gap-0'>
      <div className='flex w-full'>
        <p className='bg-cyan-400 text-white h-6 px-2 m-0 w-32 text-center'>{texte}</p>
        <p className='w-full bg-cyan-600 h-6 p-0' > </p>
      </div>
      <div className={` w-[${pourcentage}%] bg-gray-300 px-2 text-center min-w-15%`}>
        <p >{chiffre}</p>
      </div>
        
    </div>
  )
}
