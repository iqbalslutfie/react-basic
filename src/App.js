import React, { Component } from "react";
import "./App.css";
import Count from "./components/Count";
import Axios from "axios";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      data: [],
    };
  }

  clickCountIncrease = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  clickCountDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  componentDidMount() {
    Axios.get(
      "http://localhost:9090/api/interview/list/view?filter=wawancara_id=1&orderby=&top=&skip=&parent_code="
    ).then((res) =>
      this.setState({
        data: res.data.items,
      })
    );
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Click Count : {this.state.count}</h1>
          <Count
            increase={this.clickCountIncrease}
            decrease={this.clickCountDecrease}
          />
        </div>
        {this.state.data.map((data, x) => (
          <div key={x}>
            <p>Wawancara Id : {data.wawwancaraId}</p>
            <p>Pertanyaan : {data.pertanyaan}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
