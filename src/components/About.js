import React from 'react'
import {aboutData} from '../data'
import {motion} from 'framer-motion'
import {plateVariants, staggerContainer, fadeIn} from '../variants'

const About = () => {
  const {pretitle, title, subtitle, btnText, image} = aboutData;


  return (
    <section className='min-h-[620px]'>
      <div className='mx-auto min-h-[620px] container'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.6}} className='flex flex-col min-h-[620px] lg:flex-row items-center'>
          {/* text */}
          <motion.div variants={fadeIn('right', 'tween', 0.2, 1.8)} className='flex-1 text-center lg:text-left'>
            <div className='pretitle '>{pretitle}</div>
            <h2 className='capitalize h2'>{title}</h2>
            <p className='mb-8 max-w-[560px]'>{subtitle}</p>
            <button className='btn mx-auto lg:mx-0 capitalize'>{btnText}</button>
          </motion.div>
          {/* image */}
          <motion.div
          variants={plateVariants}
          className='z-10 -mb-[300px] -mr-[186px]'>
            <img src={image} alt='' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
