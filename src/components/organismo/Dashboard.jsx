import React from 'react'
import CardUsage from '../atomos/CardUsage'
import CardBlurredCard from '../mleculas/CardBlurredCard'

function Dashboard() {
  return (
      <div className='mt-[1em] flex gap-3'>
          <CardUsage className='w-[70%]'>
              <p>Make beautiful websites regardless of your design experience.</p>
          </CardUsage>
          <CardUsage className='w-[30%]'>
              <CardBlurredCard/>
          </CardUsage>
    </div>
  )
}

export default Dashboard