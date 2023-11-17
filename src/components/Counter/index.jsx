import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./style.css"
import { addToListAction } from '../../redux/action/List.action'
const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(addToListAction(counter))} className='counter'>{counter}</button>
  )
}

export default Counter