import React from 'react';

const Button = (props) => {
  const onClick = () => {
    props.onClick()
  }
  return (
    <div className='button'>
      <button onClick={() => onClick()}>
        {props.name}
      </button>
    </div>
  )
}
export default Button;