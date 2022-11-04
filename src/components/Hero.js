import React from 'react'
import {heroData} from '../data';
import Header from './Header';
import {motion} from 'framer-motion';
import {fadeIn, staggerContainer} from '../variants'

const Hero = () => {
  const {pretitle, title, subtitle, btnText} = heroData;

  return (
    <section className='bg-right bg-cover bg-hero min-h-[980px]'>
      <Header />
      <div className='items-center justify-center mx-auto container flex min-h-[980px]'>
        <motion.div className='items-center text-center flex flex-col' variants={staggerContainer(0.3, 1)} initial='hidden' whileInView={'show'}>
          <motion.div variants={fadeIn('down', 'tween', 0.2, 1.1)} className='italic font-primary text-white text-[24px] lg:text-[28px] lg:font-medium mb-1'>{pretitle}</motion.div>
          <motion.h1 className='mb-5 h1' variants={fadeIn('down', 'tween', 0.3, 1.1)}>{title}</motion.h1>
          <motion.p variants={fadeIn('down', 'tween', 0.4, 1.1)} className='mb-8 text-white max-w-[540px]'>{subtitle}</motion.p>
          <motion.div variants={fadeIn('down', 'tween', 0.5, 1.1)}>
            <button className='btn'>{btnText}</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
