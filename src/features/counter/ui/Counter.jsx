import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((currentCount) => currentCount + 1)}
    >
      Count is {count}
    </button>
  )
}

export default Counter
