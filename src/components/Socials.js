import React from 'react'
import { socialData } from '../data'

const Socials = () => {
  return (
    <div className='flex gap-x-[10px]'>
      {socialData.map((item, i) => {
        return (
          <a href={item.href} key={i} className='flex items-center justify-center rounded-full border border-white/20 text-sm hover:text-accent hover:border-accent transition-all w-[35px] h-[35px]'> 
            {item.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Socials
