import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import auth from '../auth';

const LoginPage = () => {
    let history = useHistory();
    let location = useLocation();
    let [userid, setUserid] = useState('');
    let [password, setPassword] = useState('');
  
    let { from } = location.state || { from: { pathname: "/" } };
    
    const login = () => {
        auth.login(userid, password, () => {
            history.replace(from);
        });
    };

    return (
      <div>
        아이디 : <input type="text" value={userid} onChange={(e)=>setUserid(e.target.value)} /><br/>
        암호 : <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} /><br />
        <button onClick={login}>로그인</button>
      </div>
    );
};

export default LoginPage;