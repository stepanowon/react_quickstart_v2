import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("se");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    searchContacts();
  }, []);

  let searchContacts = () => {
    const url = "https://contactsvc.herokuapp.com/contacts/search/" + name;
    axios.get(url).then(response => {
      setContacts(response.data);
    });
  };

  let contactsElements = contacts.map(c => {
    return (
      <tr key={c.no}>
        <td>{c.no}</td>
        <td>{c.name}</td>
        <td>{c.tel}</td>
        <td>{c.address}</td>
      </tr>
    );
  });

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyUp={e => {
          e.keyCode === 13 ? searchContacts() : null;
        }}
      />
      <table className="list">
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>모바일</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>{contactsElements}</tbody>
      </table>
    </div>
  );
}

export default App;
