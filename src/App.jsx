import { useState } from 'react'
import Image from './Image'
import Text from './Text'
import freedom4 from '../public/freedom4.jpg'
import jirafa from '../public/jirafa.jpg'
import lion2 from '../public/leonnn.jpg'
import lion from '../public/lion.webp'
import landscape from '../public/landscape.jpg'
import leones2 from '../public/leones2.jpg'
import {texto} from './assets/textos'
import Navbar from './Navbar'
import './index.css'

function App() {
  return (
    <div className='container'>
    <Navbar/>
      <Image foto={jirafa} titulo={'Secrets of africa'}/>
      <Text text={texto.journey}/>

      <Image foto={lion2} titulo={'wildlife'}/>
      <Text text={texto.wildlife}/>

      <Image foto={landscape} titulo={'landscapes'}/>
        <Text text={texto.landscapes}/>

      <Image foto={freedom4} titulo={'freedom'}/>
      <Text text={texto.freedom}/>

      
      

    </div>
  )
}

export default App
