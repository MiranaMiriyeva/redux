import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromListAction } from '../../redux/action/List.action'

const List = () => {
    const dispatch = useDispatch()
    const list = useSelector(state => state.list)
  return (
    <ul>
        {list.map((item,index) => <li key={index} onClick={()=>dispatch(removeFromListAction(index))}>{item}</li>)}
    </ul>
  )
}

export default List