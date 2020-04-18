import React from 'react';
import { useHistory } from 'react-router-dom';
import auth from '../auth';

const AuthButton = () => {
    let history = useHistory();
 
    return auth.currentUserInfo() ? (
      <p>
        로그인 중 : (역할: {auth.currentUserInfo().roles.join(',')})
        <button
          onClick={() => {
            auth.logout(() => history.push("/"));
          }}
        >
          logout
        </button>
      </p>
    ) : (
      <p>로그인하지 않았음.</p>
    );
};

export default AuthButton;
