import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import SongList from './SongList';
import Members from './Members';


const App = () => {
    return (
        <Router>
            <div className="container">
                <Header />
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/members" component={Members} />
                <Route path="/songs" component={SongList} />
            </div>
        </Router>
    );
};

export default App;