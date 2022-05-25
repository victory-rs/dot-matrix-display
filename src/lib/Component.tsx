import React, { useState } from 'react'

const Component: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => { setCount(c => c + 1) }}>
      This is a sample component :) {count}
    </div>
  )
}

export default Component
