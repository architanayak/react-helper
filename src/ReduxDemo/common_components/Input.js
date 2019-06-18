import React, { Component } from 'react';

export const Input = (props) => {
  return (
    <div className='input'>
      <input
        value ={props.value}
        type={props.type}
        id={props.id}
        onChange={(e) => props.onChange(e.target.id, e.target.value)}
      />
    </div>
  )
}