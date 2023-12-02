import React from 'react'

const Button = ({name , width , center}) => {
  return (
     <div className='grid '>
         <button className={`border-[2px] border-primary rounded-tr-[15px] rounded-bl-[15px] w-[${width ? width : "100%"}] text-primary p-2 text-2xl hover:bg-primary ${ center ? "mx-auto" : "m-0"} hover:text-white transition-all duration-500  group-hover:border-white  group-hover:bg-white group-hover:text-primary  `}>{name}</button>
     </div>
  )
}

export default Button