import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import SongList from './SongList';
import Members from './Members';

const App = () => {
    const [members] = useState([
        { name: 'Maggie Adams', photo: 'photos/Mag.png' },
        { name: 'Sammie Purcell', photo: 'photos/Sam.png' },
        { name: 'Tim Purcell', photo: 'photos/Tim.png' },
        { name: 'Scott King', photo: 'photos/King.png' },
        { name: 'Johnny Pike', photo: 'photos/JPike.jpg' },
        { name: 'Toby Ruckert', photo: 'photos/Toby.jpg' },
    ]);

    return (
        <Router>
            <div className="container">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" render={ (props) => <About {...props} title="여우와 늙은이들" />  } />
                <Route path="/members" 
                    render={ (props) => <Members {...props} members={members} /> } />
                <Route path="/songs" component={SongList} />
            </div>
        </Router>

    );
};

export default App;