import React from 'react'
import "./Button.css"

export const Button = ({texto, color}) => {

  return (
    <button className= {color} > {texto} </button>
  )
}
