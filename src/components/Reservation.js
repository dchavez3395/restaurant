import React, {useState} from 'react'
import {reservationData} from '../data'
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker'
import 'react-datepicker/dist/react-datepicker.css'
import '../timepicker.css'
import {FaUsers, FaCalendar, FaClock} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn, staggerContainer} from '../variants'

const Reservation = () => {
  const {title, subtitle, modelImg, btnText} = reservationData;
  const [startDate, setStartDate] = useState(new Date());
  const [value, setValue] = useState('10:00');

  return (
    <section className='relative top-96 z-30 pb-20 lg:py-[100px]'>
      <div className='mx-auto container'>
        <motion.div variants={staggerContainer} initial='hidden' whileInView={'show'} className='text-center'>
          <motion.h2 variants={fadeIn('up', 'tween', 0.2, 1.6)} className='capitalize h2'>{title}</motion.h2>
          <motion.p  variants={fadeIn('up', 'tween', 0.4, 1.6)} className='text-dark mb-8'>{subtitle}</motion.p>
          <motion.div variants={fadeIn('up', 'tween', 0.6, 1.6)} className='flex justify-center mb-8'>
            <img src={modelImg} />
          </motion.div>
        </motion.div>
        <motion.form variants={fadeIn('up', 'tween', 0.7, 1.6)} initial='hidden' whileInView={'show'}>
          <div className='items-center justify-between gap-y-4 mb-8 flex flex-col lg:flex-row'>
              {/* date picker */}
              <div>
                <div className='flex font-semibold gap-x-[10px] items-center text-dark text-base mb-3'>
                  <FaCalendar />
                  <div>Choose Date</div>
                </div>
                <DatePicker className='input' selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              {/* clock */}
              <div>
                <div className='flex font-semibold gap-x-[10px] items-center text-dark text-base mb-3'>
                  <FaClock/>
                  <div>Choose Time</div>
                </div>
                <TimePicker className='input' clearIcon={false} clockIcon={false} onChange={setValue} value={value} />
              </div>
              {/* people */}
              <div>
                <div className='flex font-semibold gap-x-[10px] items-center text-dark text-base mb-3'>
                  <FaUsers/>
                  <div>How many people?</div>
                </div>
                <input type='text' className='input' placeholder='1' />
              </div>
          </div>
          {/* button */}
          <div className='max-w-[316px] justify-center flex mx-auto'>
            <button className='capitalize w-full lg:w-auto btn'>{btnText}</button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Reservation
