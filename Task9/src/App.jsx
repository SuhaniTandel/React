import React from 'react'
import Person from './components/Person'
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Person name="Suhani" age={19}/>
      <Product name="i phone" price="$2500"/>
    </div>
  )
}

export default App