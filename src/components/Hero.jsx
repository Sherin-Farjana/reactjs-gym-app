import React from 'react'
import Button from './Button'

// Hero / landing section
export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[1000px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        {/* Main intro text */}
        <p className='font-medium'>THE GRIND STARTS NOW</p>

        {/* Primary headline */}
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Become <span className='text-blue-400'>Unstoppable</span>
        </h1>
      </div>

      {/* Subheading description */}
      <p className='text-md md:text-base font-medium'>
        Step into the zone, push past your limits, and
        <span className='text-blue-400 font-medium'> build the physique</span> you’ve always wanted.
        <span className='text-blue-400 font-medium'> Strength, size, discipline</span>
        —this is where your transformation begins.
      </p>

      {/* Scrolls to generator section */}
      <Button
        func={() => {
          window.location.href = '#generate'
        }}
        text={"Accept & Begin"}
      />
    </div>
  )
}