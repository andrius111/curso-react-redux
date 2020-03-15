import React, { useState, useEffect } from 'react'

export default props => {
  const [counter, setCounter] = useState(0)
  const [evenOdd, setEvenOdd] = useState('Even')

  useEffect(() => {
    setEvenOdd(counter % 2 === 0 ? 'Even' : 'Odd')
  })

  return (
    <div>
      <h1>Number { counter } ({ evenOdd })</h1>
      <button onClick={ () => setCounter(counter + 1) }>Add</button>
      <button onClick={ () => setCounter(counter - 1) }>Decrease</button>
    </div>
  )
}