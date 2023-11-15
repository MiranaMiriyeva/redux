import React from 'react'
import { increaseAction } from '../../redux/action/Counter.action'
import { useDispatch } from 'react-redux'

const Increment = () => {
    const dis = useDispatch()
    const increase = () => {
      dis(increaseAction(5))
    }
  
  
    return (
      <button onClick={increase}>+</button>
    )
  }


export default Increment