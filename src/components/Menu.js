import React from 'react'
import { menuData } from '../data'
import {motion} from 'framer-motion'
import { fadeIn, staggerContainer } from '../variants'

const Menu = () => {
  const {title, subtitle, modelImg, menuItems, btnText} = menuData;

  return (
    <section className='min-h-[780px]'>
      <div className='absolute bg-menu h-[780px] w-full -z-0'></div>
      {/* text */}
      <div className='relative z-10 top-72 lg:top-52'>
        <div className='container mx-auto flex flex-col items-center text-center'>
          <h2 className='text-center text-white max-w-[400px] h2 capitalize'>{title}</h2>
          <p className='capitalize mb-8 text-white/70'>{subtitle}</p>
          <div>
            <img src={modelImg} />
          </div>
        </div>
      </div>
      {/* menu gallery */}
      <motion.div initial={{opacity: 0, y: 150,}} whileInView={{opacity: 1, y: 0,}} transition={{type: 'tween', delay: 0.2, duration: 1.6, ease: 'easeOut'}} className='relative top-80 lg:top-96'>
        <div className='mx-auto container'>
          <div className='lg:-mt-24 min-h-[590px] z-30 mb-8 md:mb-4 xl:mb-16'>
            <div className='grid grid-cols-1 lg:grid-cols-4 min-h-[590px]'>
              {menuItems.map((item, i) => {
                const {image, name, price, description} = item;
                return (
                  <div key={i}>
                    <div className='flex flex-row lg:flex-col group h-full'>
                      {/* img */}
                      <div className={`w-[45%]  md:w-auto ${
                        i === 1 || i === 3 ? 'lg:order-1' : 'order-none'
                      }`}>
                        <img src={image} className='group-hover:scale-[102%]' alt='' />
                      </div>

                      {/* text */}
                      <div className='bg-[#fff3e4] flex flex-col justify-center flex-1 px-6 lg:p-12 lg:max-h-[250px] xl:max-h-max'>
                        <div className='text-center'>
                          <div className='text-dark text-xl font-semibold xl:text-2xl'>{name}</div>
                          <div className='text-accent font-semibold my-1 text-[20px] lg:text-[40px]'>{price}</div>
                          <div>{description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Menu
