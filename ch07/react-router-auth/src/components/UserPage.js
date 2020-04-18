import React from 'react';
import auth from '../auth';

const UserPage = () => {
    const userInfo = auth.currentUserInfo();
    return (
        <div>
            <h2>사용자 페이지 : users 역할이 있어야 함.</h2>
            <p>userid : {userInfo.userid}</p>
            <p>roles : {userInfo.roles.join(',')}</p>
        </div>
    );
};

export default UserPage;