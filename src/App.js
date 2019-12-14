import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Item from "./Item";

class App extends React.Component {
  state = {
    items: [1, 2, 3]
  };

  onBtnClick = () => {
    this.setState({
      items: [Math.floor(Math.random() * 1000), ...this.state.items]
    });
  };

  render() {
    return (
      <div className="App">
        <span>Enter values and press button (keys are indicies)</span>
        {this.state.items.map((item, index) => (
          <Item key={index} value={item} />
        ))}
        <span>Enter values and press button (keys are not indicies)</span>
        {this.state.items.map((item, index) => (
          <Item key={item} value={item} />
        ))}
        <button onClick={this.onBtnClick}>Click me</button>
      </div>
    );
  }
}

export default App;
