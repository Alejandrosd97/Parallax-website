import { useState } from 'react'
import Image from './Image'
import africa1 from '../public/africa1.jpg'
import jirafa from '../public/jirafa.jpg'
import sabana2 from '../public/sabana2.jpg'
import desierto from '../public/desierto.jpg'
import leones from '../public/leones.jpg'
import leones2 from '../public/leones2.jpg'


import Text from './Text'
import Navbar from './Navbar'
import './index.css'

function App() {

  return (
    <div className='container'>
    <Navbar/>
      <Image foto={jirafa} titulo={'africa'}/>
      <Text texto/>
      <Image foto={leones2} titulo={'wildlife'}/>
      <Text/>
      <Image foto={sabana2} titulo={'landscapes'}/>
      <Text/>
      <Image foto={leones} titulo={'Wildlife'}/>

      <Text/>
      <Image foto={desierto} titulo={'Freedom'}/>
      <Text/>
      <Image foto={sabana2} titulo={'Freedom'}/>

    </div>
  )
}

export default App
