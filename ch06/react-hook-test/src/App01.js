import React, { useState } from "react";

function App() {
  const [msg, setMsg] = useState("React!!");

  return (
    <div>
      <input type="text" value={msg} onChange={e => setMsg(e.target.value)} />
      <span>Hello {msg}</span>
    </div>
  );
}

export default App;
