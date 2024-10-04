import React from 'react'

function Button(props:{text:string}) {
  return (
    <div className=''>
        <button className=' py-3 px-4 rounded-2xl text-xl  bg-orange-500 hover:bg-orange-400 font-semibold'> {props.text}</button>
    </div>
  )
}

export default Button