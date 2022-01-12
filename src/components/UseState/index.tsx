import React, { useState } from 'react'

const UseState: React.FC = (): JSX.Element => {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, nameSet] = useState<string | null>(null);
  return (
    <div>
      <div>
        {/* on each click element will be added to array with type number */}

        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet("AMIN")}>Set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  )
}

export default UseState
