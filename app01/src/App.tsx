
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
  let msg = "Salam Donya";

  const [counter, setCounter] = useState(42);
  const [show, setShow] = useState(true);

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

  function toggleShow() {
    console.log(show)
    msg = "xyz"
    setShow(!show);
  }

  //virtual dom
  return (
    <>
      <div className="container">
        <h1>{msg}</h1>
        <hr />
        <button onClick={toggleShow}>toggle</button>
        {show && <div >
          <hr />
          {counter}
          <br />
          <button onClick={inc}>➕</button>&nbsp;
          <button onClick={dec}>➖</button>
        </div>}
      </div>
    </>
  )
}

export default App

