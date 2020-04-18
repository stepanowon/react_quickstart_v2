import React, { Component } from 'react';
import CountryList from './CountryList';

class App extends Component {
    createString(x,y) {
        return (
            <div className="card card-body bg-light mb-3">{x} + {y} = {x+y}</div>
        )
    }

    render() {
        let msg = "World!!";

        return (
            <div className="container">
                <h1>Hello {msg}</h1>
                <hr className="dash-style" />
                { this.createString(4,5) }
                <CountryList />
            </div>
        );
    }
}
export default App;
