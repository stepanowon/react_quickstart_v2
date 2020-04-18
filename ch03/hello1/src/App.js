import React, { Component } from 'react';

class App extends Component {
    createString(x,y) {
        return (
            <div>{x} + {y} = {x+y}</div>
        )
    }

    render() {
        let msg = "World!!";

        return (
            <div>
                <h1>Hello {msg}</h1>
                <hr />
                { this.createString(4,5) }
            </div>
        );
    }
}
export default App;
