import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogLists from "./HogLists";
import FilteredHogs from "./FilteredHogs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hogs: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/hogs")
      .then(resp => resp.json())
      .then(hogs => {
        this.setState({ hogs });
      });
  }

  filteredHogs = () => {};

  render() {
    return (
      <div className="App">
        <Nav />
        <HogLists hogs={this.state.hogs} />
        <FilteredHogs />
      </div>
    );
  }
}

export default App;
