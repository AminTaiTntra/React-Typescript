import React , {useRef} from 'react'

function UseRef() {
  // we can assign type of the HTML element as well
  const inputRef = useRef<HTMLInputElement | null>(null);
  console.log("🚀 ~ file: index.tsx ~ line 6 ~ UseRef ~ inputRef", inputRef )
  
  return (
    <div>
      <input ref={inputRef}/>
      {/* {inputRef.current.value} */}
    </div>
  )
}

export default UseRef
const inputRef = useRef<HTMLInputElement | null>(null);
