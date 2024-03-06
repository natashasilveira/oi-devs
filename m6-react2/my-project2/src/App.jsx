import { useState } from 'react'
import './App.css'
import { Flex } from './components/flex'

function App() {

  return (
    <>
    <Flex>Flex 1
      <Flex direction='column'>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    </Flex>
    </>
  )
}

export default App;
