import React from 'react'
import './assets/css/text.css'


export default function Text(props) {
  return (
    <div className="full-text">
    <div className='text'>
        <h2>{props.titulo}</h2>
        <p>{props.text}</p>
    </div>
    </div>
  )
}
