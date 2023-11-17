import React from 'react'
import Decrement from './components/Decrement'
import Counter from './components/Counter'
import Increment from './components/Increment'
import "./App.css"
import List from './components/List'

const App = () => {
  return (
    <div>
      <h4>Counter App</h4>
      <div className='main'>
      <Decrement/>
      <Counter/>
      <Increment/> 
      <List/>
      </div>
      
    </div>
  )
}

export default App