import React from 'react';
import auth from '../auth';

const AdminPage = () => {
    const userInfo = auth.currentUserInfo();
    return (
        <div>
            <h3>관리자 페이지 : admins 역할이 있어야 함.</h3>
            <p>userid : {userInfo.userid}</p>
            <p>roles : {userInfo.roles.join(',')}</p>
        </div>
    );
};

export default AdminPage;