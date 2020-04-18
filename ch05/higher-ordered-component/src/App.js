import React, { Component } from 'react';
import produce from 'immer';
import MyButton from './MyButton';
import List from './List';

class App extends Component {
    constructor() {
        super()
        this.state = {  itemlist : [ ] }
    }

    addItem = () => {
        if (!this.num) this.num = 0;
        this.num++;
        let newItemList = produce(this.state.itemlist, 
            (draft)=> {
                 draft.push({ no: new Date().getTime(), 
                 itemname: "아이템 " + this.num});
            }
        )	
        this.setState({ itemlist : newItemList });
    }

    render() {
      return (
          <div className="container">
              <div className="card card-body bg-gray-300 m-2">
                  <MyButton addItem={this.addItem} />
                  <List itemlist={this.state.itemlist} isLog={process.env.NODE_ENV==="development"} />
              </div>
          </div>
      );
  }
}
export default App;
