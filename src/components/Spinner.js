import React from 'react'
import { RotatingLines } from 'react-loader-spinner'

function Spinner() {
  return (
    <div>
        <RotatingLines
        strokeColor="#6521ff"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
        />
    </div>
  )
}

export default Spinner