import React from 'react'
import Newsletter from './Newsletter'
import Copyright from './Copyright'
import Socials from './Socials'
import { footerData } from '../data'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer} from '../variants'

const Footer = () => {
  const {contact, hours, social} = footerData

  return (
    <footer className='relative top-96 z-20 bg-dark lg:bg-transparent lg:min-h-[620px] lg:bg-footer lg:pt-32'>
      <div className='mx-auto h-full container'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} className='flex- flex-col gap-y-4 h-full'>
          <motion.div variants={fadeIn('up', 'tween', 0.4, 1.6)} >
            <Newsletter />
          </motion.div>
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1.6)} className='flex flex-col lg:flex-row lg:gap-x-[130px] gap-y-12 lg:gap-y-0 lg:mb-12'>
            <div className='flex-1 lg:max-w-[170px]'>
              <div className='font-normal text-white capitalize font-primary mb-[22px] text-[20px] lg:text-[22px]'>{contact.title}</div>
              <div className='capitalize'>{contact.address}</div>
              <div className='capitalize'>{contact.phone}</div>
            </div>
            <div className='flex-1'>
              <div className='font-normal text-white capitalize font-primary mb-[22px] text-[20px] lg:text-[22px]'>{hours.title}</div>
              <div className='flex gap-x-[46px]'>
                {hours.program.map((item, i) => {
                  return (
                    <div className='capitalize' key={i}>
                      <div>
                        <div>{item.days}</div>
                        <div className='text-accent text-[20px]'>{item.hours}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='flex-1 lg:max-w-[280px] mb-12'>
              <div className='font-normal text-white capitalize font-primary mb-[22px] text-[20px] lg:text-[22px]'>{social.title}</div>
              <Socials />
            </div>
          </motion.div>
          <Copyright />
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
