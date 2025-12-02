import React from 'react'
import Hero from './sections/hero'
import Tools from './sections/tools'
import Worksample from './sections/work'
import Certifications from './sections/certifications'
import Documents from './sections/documents'

export default function Page() {
  return (
    <div className=''>
    <Hero/>
    <Tools/>
    <Worksample/>
    <Documents/>
    <Certifications/>
      
    </div>
  )
}
