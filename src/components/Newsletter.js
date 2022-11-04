import React from 'react'
import { newsletterData } from '../data'

const Newsletter = () => {
  const {title, subtitle, placeholder, btnText} = newsletterData
  return (
    <div className='bg-none lg:bg-newsletter lg:bg-cover lg:h-[220px] lg:bg-center lg:px-24 xl:bg-auto'>
      <div className='h-full flex flex-col lg:flex-row items-center justify-between'>
        <div className='mb-4 text-center lg:text-left'>
          <h3 className='italic text-white font-primary text-[26px] capitalize mb-2'>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <form className='flex flex-col lg:flex-row lg:gap-x-[10px] gap-y-4'>
          <input type='text' className='focus:ring-1 focus:ring-accent border border-white/20 text-white input bg-transparent placeholder:font-light placeholder:text-white/20 transition-all' placeholder={placeholder} />
          <button className='w-full btn capitalize lg:max-w-[240px]'>{btnText}</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter
