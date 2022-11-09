import React from 'react'



const Mensaje = ({children,tipo}) => {
  return (
    <div className= {'bg-red-700 text-white text-center uppercase  max-w-5xl font-medium text-xl p-1 m-2  ${tipo}'}>{children}</div>
  )
}

export default Mensaje