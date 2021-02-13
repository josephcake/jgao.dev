import React from 'react'
import mewgrounds from '../../media/mewgrounds/mewgrounds.jpg'

const Mewgrounds = () =>{
  return(
    <div className={'project-wrapper'}>
      <img className={'project-wrapper__img'} srcSet={mewgrounds} alt={"mewgrounds"}/>
    </div>
  )
}

export default Mewgrounds