import React from "react";

export default class HogDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      showDetail: false
    };
  }

  toggleShowDetail = () => {
    this.setState({
      showDetail: !this.state.showDetail
    });
  };

  render() {
    return (
      <div className="ui four wide column card">
        <h2>{this.props.hog.name}</h2>
        <img src={this.props.hog.image} alt="" />
        <button onClick={this.toggleShowDetail}>Toggle Details</button>

        {this.state.showDetail ? (
          <div>
            <h4>{this.props.hog.specialty}</h4>
            <h4>{this.props.hog.greased ? "Is greased" : "Not greased"}</h4>
            <h6>
              {
                this.props.hog[
                  "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
                ]
              }
            </h6>
            <h6>{this.props.hog["highest medal achieved"]}</h6>
          </div>
        ) : null}
      </div>
    );
  }
}
