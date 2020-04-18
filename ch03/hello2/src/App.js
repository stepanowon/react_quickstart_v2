import React, { Component } from 'react';

class App extends Component {
    createString(x,y) {
        return (
            <div class="card card-body bg-light mb-3">{x} + {y} = {x+y}</div>
        )
    }

    render() {
        let msg = "World!!";

        return (
            <div class="container">
                <h1>Hello {msg}</h1>
                <hr class="dash-style" />
                { this.createString(4,5) }
            </div>
        );
    }
}
export default App;
