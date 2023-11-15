import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseAction } from '../../redux/action/Counter.action'

const Decrement = () => {
  const dis = useDispatch()
  const decrease = () => {
    dis(decreaseAction(10))
  }


  return (
    <button onClick={decrease}>-</button>
  )
}

export default Decrement