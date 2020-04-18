import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = { num : 0 }
  }
  add() {    this.setState({ num : this.state.num+1 })    }
  subtract = ()=> {  this.setState({ num : this.state.num-1 })    }
  render() {
    return (
      <div className="card card-body bg-gray-200 m-2">
          <span className="input-group-btn">
            <button type="button" className="btn btn-primary m-1" onClick={ this.subtract}>
              -
            </button>
            <button type="button" className="btn btn-primary m-1" onClick={this.add.bind(this)}>
              +
            </button>
            <input type="text" className="form-control input-number m-1" value={this.state.num} />
          </span>
      </div>
    );
  }
}

export default App;
