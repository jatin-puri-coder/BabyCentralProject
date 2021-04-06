import React, { useState } from 'react'

const Clicks = (props) => {
  const { startingClicks } = props.match.params
  const [count, setCount] = useState(Number(startingClicks))

  function handleClick (event) {
    if (count > 30) {
      props.history.push('/about')
    }
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

export default Clicks
