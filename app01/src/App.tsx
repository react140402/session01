
/**
 * JSX/TSX
 *  1. one node root -  <></> fragment
 *  2. tag close
 *  3. class -> className
 *  4. props: kebab-case -> camelCase
 *      font-size -> fontSize
 * 
 */

function App() {
  const msg = "Salam Donya";

  return (
    <>
      <div className="container">
        <h1>{msg}</h1>
      </div>
    </>
  )
}

export default App

