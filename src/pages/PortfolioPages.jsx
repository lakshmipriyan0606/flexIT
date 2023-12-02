import React from 'react'
import Portfolio from '../component/portfolio/Portfolio'
import Testmonial from '../component/Testomonial/Testmonial'
import Company from '../component/company/Company'
import Contact from '../component/contact/Contact'

const PortfolioPages = () => {
  return (
    <div>
        <Portfolio/>
        <Testmonial/>
        <Company/>
        <Contact/>
    </div>
  )
}

export default PortfolioPages