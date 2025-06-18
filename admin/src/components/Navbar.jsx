import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <img className='w-[max(10%,80px)]' src={assets.logo_adminPanel} alt="" />
      <button>Logout</button>
    </div>
  )
}

export default Navbar
