import React, {useState} from 'react'
import MidSection from '../../components/MidSection'

const AboutMe = () => {

  const [tab, setTab] = useState('jgao')
  return(
    <div className={'jgao'}>
      <div className={'profile-wrapper'}>
        <div className={'tab-container'}>          
          <div className={'tab'}>About me</div>
          <div className={'tab'}>Experience</div>
          <div className={'tab'}>Say hi</div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe