import { Parallax } from "react-parallax";
import './assets/css/image.css'
import Text from './Text'

import React from 'react'

export default function Image(props) {
  return (
    <Parallax bgImage={props.foto} strength={300} className='imagen'>
        <div className="titulo-principal" id={props.titulo}>
            <span>{props.titulo}</span>
        </div>
    </Parallax>
  )
}
