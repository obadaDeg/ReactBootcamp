import React from 'react'
import "./Message.css"

export default function Message({message, className}) {
  return (
    <div>
        <h3 className={className}>{message}</h3>
    </div>
  )
}
