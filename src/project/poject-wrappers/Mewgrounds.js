import React from 'react'
import mewgrounds from '../../media/mewgrounds/mewgrounds.jpg'

const Mewgrounds = () =>{
  return(
    <div className={'project-wrapper'}>
      <div>
        <img className={'project-wrapper__img'} srcSet={mewgrounds} alt={"mewgrounds"}/>
      </div>
      <div className={'blur-overlay'}></div>
    </div>
  )
}

export default Mewgrounds