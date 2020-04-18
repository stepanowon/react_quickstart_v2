//사용자 리스트 : 실제는 백엔드를 통해서 JWT와 같은 토큰을 받아오도록 작성
const staticUsers = [
    { userid:"user1", password:"1234", roles: [ "users" ] },
    { userid:"user2", password:"1234", roles: [ "users" ] },
    { userid:"admin", password:"1234", roles: [ "admins", "users" ] },
];

//경로에 접근할 때 필요한 Role 정보
const pathToRoles = [
    { path: "/users", role: "users" },
    { path: "/admins", role: "admins" },
];

//인증 기능
let userInfo = null;
const auth = {
    login(userid, password, callback) {
        const user = staticUsers.find((u)=>{
            return u.userid === userid && u.password === password;
        })
        if (user) {
            userInfo = { userid:user.userid, roles:user.roles };
            callback();
        } else {
            alert('로그인 실패!!');
        }
    },
    logout(callback) {
        userInfo = null;
        callback();
    },
    currentUserInfo() {
        return userInfo;
    },
    isMatchToRoles(path) {
        let pathToRole = pathToRoles.find((p)=> p.path === path)
        if (!pathToRole) return false;
        
        if (!userInfo) return false;
        let index = userInfo.roles.findIndex((r)=> pathToRole.role===r);
        return index >= 0 ? true : false;
    }
}

export default auth;

