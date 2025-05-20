
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

  //[number, React.Dispatch<React.SetStateAction<number>>]
  const counter = useState(0)



  function inc() {
    console.log('current:', counter[0])
    counter[1](counter[0] + 1);
    console.log(counter[0])
  }

  function dec() {
    console.log('current:', counter[0])
    counter[1](counter[0] - 1);
    console.log(counter[0])
  }

  return (
    <>
      <div className="container">
        <h1>{msg}</h1>
        {counter[0]}
        <br />
        <button onClick={inc}>➕</button>&nbsp;
        <button onClick={dec}>➖</button>
      </div>
    </>
  )
}

export default App

