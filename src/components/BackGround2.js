import React, { Component } from 'react'
import Header from './Header';
import ParticlesBg from 'particles-bg'
import Photo from './Photo';
import './../css/BackGround2.css'

class BackGround2 extends Component {
  render () {
    return (
      <>
        <div className='background2'>
        <ParticlesBg type="cobweb" bg={true} />
        <Photo className="cc"/>
        </div>
        {/* <Header /> */}
        
      </>
    )
  }
}

export default BackGround2;