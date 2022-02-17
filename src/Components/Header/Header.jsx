import React from 'react'
import './Header.css'
import img from '../../img/01.png'

const Header = () => {
  return (
    <div className='header'>
       <img src={img} alt='img' />
       <h1>country search</h1>
    </div>
  )
}

export default Header