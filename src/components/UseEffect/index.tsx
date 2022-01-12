import React ,{useState , useEffect} from 'react'

function UseEffect() {
  <h1>Use Effect </h1>
  const [number , setNumber] = useState<number>(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNumber((num) => num + 1);
    }, 1000);
    // return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      {number}
    </div>
  )
}

export default UseEffect
