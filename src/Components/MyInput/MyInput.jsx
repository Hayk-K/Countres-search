import React from 'react'
import './MyInput.css'

const MyInput = ({...onChange}) => {
  return (
      <input {...onChange} className='input' type='text' placeholder="search..."/>
  )
}

export default MyInput