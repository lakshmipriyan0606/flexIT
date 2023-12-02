import React from 'react'
import HeroSection from '../component/HeroSection/HeroSection'
import Services from '../component/Service/Services'
import About from '../component/about/About'
import Portfolio from '../component/portfolio/Portfolio'
import Company from '../component/company/Company'
import Pricing from '../component/pricing/Pricing'
import Blog from '../component/blog/Blog'
import Testmonial from '../component/Testomonial/Testmonial'
import Customer from '../component/Customer/Customer'
const Home = () => {
  return (
    <div>
       <HeroSection/>
       <Services/>
       <About/>
       <Customer/>
       <Portfolio/>
       <Company/>
       <Pricing/>
       <Testmonial/>
       <Blog/>
    </div>
  )
}

export default Home