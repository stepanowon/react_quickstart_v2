import React, { useState, useEffect } from "react";

function ChildFunc() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    console.log("### Clock component is mounted!!");
    let handle = setInterval(() => {
      setCurrentTime(new Date());
      console.log("### Time is updated : " + currentTime);
    }, 1000);

    return () => {
      console.log("### Clock component will be unmounted!!");
      clearInterval(handle);
    };
  }, []);

  let hh = currentTime.getHours();
  let mm = currentTime.getMinutes();
  let ss = currentTime.getSeconds();

  return (
    <div>
      <h2>
        {hh}시 {mm}분 {ss}초
      </h2>
    </div>
  );
}

export default ChildFunc;
