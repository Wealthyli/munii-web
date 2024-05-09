'use client'
import React from 'react'
import Features from './Features'
import Testimonial from './Testimonial'

function MainBody() {
  return (
    <section>
      <div className='mt-24'>
        <Features />
      </div>
      <div className='mt-8 lg:mt-24'>
        <Testimonial />
      </div>
    </section>
  )
}

export default MainBody