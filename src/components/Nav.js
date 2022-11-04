import React from 'react'
import { navData } from '../data'

const Nav = () => {
  return (
    <nav className='h-full w-full'>
      <ul className='items-center justify-center h-full flex flex-col gap-y-6'>
        {navData.map((item, i) => {
          return (
            <li key={i}>
              <a href={item.href} className='italic font-primary text-xl hover:text-dark capitalize transition-all duration-300'>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
