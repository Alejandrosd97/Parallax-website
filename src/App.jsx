import { useState } from 'react'
import Image from './Image'
import africa1 from '../public/africa1.jpg'
import africa2 from '../public/africa2.jpg'
import peces from '../public/peces.jpg'
import tortuga from '../public/tortuga.jpg'
import Text from './Text'
import Navbar from './Navbar'
import './index.css'

function App() {

  return (
    <div className='container'>
    <Navbar/>
      <Image foto={africa1} titulo={'primero'}/>
      <Text/>
      <Image foto={africa2} titulo={'segundo'}/>
      <Text/>
      <Image foto={peces} titulo={'tercero'}/>
      <Text/>
    </div>
  )
}

export default App
