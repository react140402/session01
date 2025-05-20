
/**
 * JSX/TSX
 *  1. one node root -  <></> fragment
 *  2. tag close
 *  3. class -> className
 *  4. props: kebab-case -> camelCase
 *      font-size -> fontSize
 *  5. only expression
 * 
 * 
 * statment
 * expression
 */

//use* - hook
import { useState } from "react";
import { Counter } from "./Counter";




function App() {
  console.log("App...");
  let msg = "Salam Donya";
  const [show, setShow] = useState(true);

  function toggleShow() {
    console.log(show)
    msg = "xyz"
    setShow(!show);
  }

  const tasks = [
    { id: 1, name: "task 1", done: true },
    { id: 2, name: "task 2", done: true },
    { id: 3, name: "task 3", done: false },
    { id: 4, name: "task 4", done: false },
    { id: 5, name: "task 5", done: true },
  ];

  //virtual dom
  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>done</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.done ? "Yes" : "No"}</td>
            </tr>)}
          </tbody>
        </table>
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

