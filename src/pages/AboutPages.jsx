import React from 'react'
import Team from '../component/Team/Team'
import Contact from '../component/contact/Contact'
import About from '../component/about/About'
import Customer from '../component/Customer/Customer'
import Blog from '../component/blog/Blog'
import Testmonial from '../component/Testomonial/Testmonial'
import Company from '../component/company/Company'

const AboutPages = () => {
  return (
    <div className='my-14'>
        <About/>
        <Team/>
        <Customer/>
        <Blog/>
        <Testmonial/>
        <Company/>
        <Contact/>
    </div>
  )
}

export default AboutPages