
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
  const [show, setShow] = useState(true);

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
        {show && <Counter />}
        <Counter />
        <Counter />
        <Counter />

      </div>
    </>
  )
}


//PascalCase
function Counter() {
  const [counter, setCounter] = useState(42);
  function inc() {
    setCounter(counter + 1);
  }

  function dec() {
    setCounter(counter - 1);
  }

  return <div >
    <hr />
    {counter}
    <br />
    <button onClick={inc}>➕</button>&nbsp;
    <button onClick={dec}>➖</button>
  </div>
}


export default App

