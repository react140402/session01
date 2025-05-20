
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
import { Counter } from "./Counter";

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
        {show && <Counter init={42} step={1} />}
        <Counter init={0} step={1} />
        <Counter init={0} step={10} />
        <Counter init={100} step={50} />

      </div>
    </>
  )
}


export default App

