import React from 'react'
import Services from '../component/Service/Services'
import Testmonial from '../component/Testomonial/Testmonial'
import Question from '../component/question/Question'
import Contact from '../component/contact/Contact'

const ServicePages = () => {
  return (
    <div>
      <Services/>
      <Testmonial/>
      <Question/>
      <Contact/>
    </div>
  )
}

export default ServicePages