import "./App.css"
import { useState } from "react"
import Counter from "./components/counter"
import Lists from "./components/Lists"
function App() {
  const [num, setNum] = useState(0)

  return (
    <>
      hello world, <h2>this is the app</h2>
      <div>{num}</div>
      <button onClick={() => setNum(num + 1)}>increase</button>
      <button onClick={() => setNum(num - 1)}>decrease</button>
      {/* <button onClick={() => setNum((prev) => prev + 1)}>increase</button>
      <button onClick={() => setNum((prev) => prev + 1)}>increase</button> */}
      <Counter num={num} setNum={setNum} />
      <Lists />
    </>
  )
}

export default App
