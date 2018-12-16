import React from "react";

import HogDetails from "./HogDetails";

export default class HogLists extends React.Component {
  render() {
    return (
      <ul className="ui grid container cards">
        {this.props.hogs.map(hog => (
          <HogDetails hog={hog} key={hog.id} />
        ))}
      </ul>
    );
  }
}
