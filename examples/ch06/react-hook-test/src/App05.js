import React, { useState } from "react";
import Clock from "./ClockFunc";
//import Clock from "./ClockClass";

function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Visible!!</button>
      {visible ? <Clock /> : ""}
    </div>
  );
}

export default App;
