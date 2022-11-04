import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../slider.css'

const TestimonialCarousel = ({slider}) => {
  return (
    <Carousel className='flex justify-center items-center w-full max-w-[1024px]' showThumbs={false} showStatus={false} showIndicators={false} autoPlay={true} infiniteLoo={true}>
      {slider.map((item, i) => {
        const {image, message, name, occupation} = item;
        return (
          <div className='mx-auto max-w-[840px] text-white px-24' key={i}>
            <div className='leading-snug mb-9 text-lg lg:text-2xl'>{message}</div>
            <div className='mx-auto mb-3 max-w-[70px] lg:max-w-[100px]'>
              <img src={image} />
            </div>
            <div className='text-accent font-bold text-[22px]'>{name}</div>
            <div className='italic font-medium'>{occupation}</div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default TestimonialCarousel
