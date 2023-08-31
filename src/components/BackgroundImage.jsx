import React from 'react'
import { cccoil } from '../assets'

const BackgroundImage = () => {
  return (
    <div className='w-full h-screen absolute overflow-hidden z-[-9999]'>
        <img src={cccoil} className="roundImage w-[1500px] absolute top-[-550px] left-[800px]" />
    </div>
  )
}

export default BackgroundImage
