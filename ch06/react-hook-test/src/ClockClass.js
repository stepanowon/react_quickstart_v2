import React, { Component } from "react";

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    console.log("### Clock component is mounted!!");
    this.handle = setInterval(() => {
      this.setState({ currentTime: new Date() });
      console.log("### Time is updated");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("### Clock component will be unmounted!!");
    clearInterval(this.handle);
  }

  render() {
    let hh = this.state.currentTime.getHours();
    let mm = this.state.currentTime.getMinutes();
    let ss = this.state.currentTime.getSeconds();

    return (
      <div>
        <h2>
          {hh}시 {mm}분 {ss}초
        </h2>
      </div>
    );
  }
}

export default ClockClass;
