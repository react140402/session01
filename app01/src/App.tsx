
/**
 * JSX/TSX
 *  1. one node root -  <></> fragment
 *  2. tag close
 *  3. class -> className
 *  4. props: kebab-case -> camelCase
 *      font-size -> fontSize
 * 
 */

//use* - hook
import { useState } from "react";

function App() {
  console.log("App...")
  const msg = "Salam Donya";

  const [counter, setCounter] = useState(42);

  function inc() {
    console.log('current:', counter)
    setCounter(counter + 1);
    console.log(counter)
  }

  function dec() {
    console.log('current:', counter)
    setCounter(counter - 1);
    console.log(counter)
  }

  return (
    <>
      <div className="container">
        <h1>{msg}</h1>
        {counter}
        <br />
        <button onClick={inc}>➕</button>&nbsp;
        <button onClick={dec}>➖</button>
      </div>
    </>
  )
}

export default App

