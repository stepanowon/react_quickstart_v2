import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("hong");

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;
