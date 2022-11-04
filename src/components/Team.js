import React from 'react'
import { teamData } from '../data'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Team = () => {
  const {pretitle, title, sub1, sub2, name, occupation, signatureImg, chefImg} = teamData
  return (
    <section className='z-10 top-96 relative lg:top-[480px] min-h-[720px]'>
      <div className='mx-auto container'>
        <div className='flex flex-col items-center lg:items-start lg:flex-row lg:gap-x-[120px]'>

          <motion.div className='items-center flex-1 lg:text-left lg:pt-16' variants={fadeIn('down', 'tween', 0.6, 1.6)} initial='hidden' whileInView={'show'}>
            <div className='pretitle'>{pretitle}</div>
            <h2 className='capitalize h2'>{title}</h2>
            <p className='mb-[60px]'>{sub1}</p>
            <p>{sub2}</p>
            <div className='my-[26px]'>
              <div className='capitalize font-semibold text-2xl text-accent'>{name}</div>
              <div className='capitalize font-semibold text-grey/70 text-[15px]'>{occupation}</div>
            </div>
            <div className='flex justify-center mb-6 lg:mb-0 lg:justify-start'>
              <img src={signatureImg} />
            </div>
          </motion.div>

          <motion.div variants={fadeIn('up', 'tween', 0.7, 1.6)} initial='hidden' whileInView={'show'} className='flex-1'>
            <img src={chefImg} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Team
