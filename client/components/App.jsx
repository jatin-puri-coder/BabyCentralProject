import React, { useState } from 'react'

const App = (props) => {
  const [count, setCount] = useState(0)

  function handleClick (event) {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{props.header}</h1>
      <div className='happyDiv'>Happy div</div>
      Hello Whai - clicks = <span data-testid='count'>{count}</span>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
