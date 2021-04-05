import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  function handleClick (event) {
    setCount(count + 1)
  }

  return (
    <>
      <div className='happyDiv'>Happy div</div>
      Hello Whai - clicks = {count}
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
