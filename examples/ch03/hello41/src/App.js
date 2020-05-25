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
        let list = [ { no:1, country:'이집트', visited:false }, { no:2, country:'일본',  visited:true },
            { no:3, country:'피지', visited:false }, { no:4, country:'콜롬비아', visited:false }  ];

        return (
            <div className="container">
                <h1>Hello {msg}</h1>
                <hr className="dash-style" />
                { this.createString(4,5) }
                <CountryList countries={list} />
            </div>
        );
    }
}
export default App;
