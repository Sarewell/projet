import TitleSection from '@/components/TitleSection'
import SkillBar from '@/components/cards/SkillBar'
import React from 'react'

export default function About() {
  return (
    <div className='text-gray-500 mx-[20%]'>
      <TitleSection
        title='about'
      />
      <div className='text-gray-400 grid grid-cols-2 lg:grid-cols-4 justify-center'>
        <div className='text-center'>
          <p className='text-xl capitalize font-bold'>fast</p>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className='text-center'>
          <p className='text-xl capitalize font-bold'>responsive</p>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div className='text-center'>
          <p className='text-xl capitalize font-bold'>intuitive</p>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
        <div className='text-center'>
          <p className='text-xl capitalize font-bold'>dynamic</p>
          <p>Websites don't have to be static, I love making pages come to life.</p>
        </div>
        
      </div>
      <div className='w-full  grid grid-cols-1 lg:grid-cols-2 lg:gap-10 p-4'>
          <div className='w-full '>
            <img src="" alt="" />
            <p>Who's this guy?</p>
            <p>I'm a web Developer in Vernon, France. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.</p>
          </div>
          <div className='w-full '>
            <SkillBar
            texte= 'html'
            chiffre='50'
            pourcentage='30'

            />
          </div>
          
          
          
        </div>
    </div>
  )
}
