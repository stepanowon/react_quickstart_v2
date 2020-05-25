import React, { useRef } from "react";

const App = () => {
  const elName = useRef(null);
  const elTel = useRef(null);
  const elAddress = useRef(null);

  const goFirstInputElement = () => {
    elName.current.focus();
  };

  return (
    <div>
      이름 :
      <input ref={elName} type="text" defaultValue="홍길동" />
      <br />
      전화 :
      <input ref={elTel} type="text" defaultValue="010-2222-3333" />
      <br />
      주소 :
      <input ref={elAddress} type="text" defaultValue="서울" />
      <br />
      <button onClick={goFirstInputElement}>첫번째 필드로 포커스 이동</button>
      <br />
    </div>
  );
};

export default App;
