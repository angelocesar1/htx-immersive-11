import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this);

    this.state = {
      count: 0
    };
  }

  handleAddIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleSubtractIncrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h1 className="my-counter">{this.state.count}</h1>
        <button onClick={this.handleAddIncrement}>+</button>
        <button onClick={this.handleSubtractIncrement}>-</button>
      </div>
    );
  }
}

export default Counter;
