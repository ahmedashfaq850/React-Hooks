import React from 'react'
import UseEffect from './Hooks/UseEffect'
import UseReducer from './Hooks/UseReducer'
import UseReff from './Hooks/UseReff'
import UseState from './Hooks/UseState'

const App = () => {
  return (
    <div>
      <UseState/>
      <UseReducer/>
      <UseEffect/>
      <UseReff/>
    </div>
  )
}

export default App