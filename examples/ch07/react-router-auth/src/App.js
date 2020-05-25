import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import PublicPage from './components/PublicPage';
import LoginPage from './components/LoginPage';
import AuthButton from './components/AuthButton';

const App = () => {
    return (
        <Router>
        <div style={{ margin:'10px' }}>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/users">사용자페이지</Link></li>
                <li><Link to="/admins">관리자페이지</Link></li>
            </ul>
            <AuthButton />
 
            <Switch>
                <Route exact path="/"><PublicPage /></Route>
                <Route path="/login"><LoginPage /></Route>
                <ProtectedRoute path="/users"><UserPage /></ProtectedRoute>
                <ProtectedRoute path="/admins"><AdminPage /></ProtectedRoute>
            </Switch>
        </div>
        </Router>
    );
};

export default App;