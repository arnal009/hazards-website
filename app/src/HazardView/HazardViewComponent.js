import React, { Component } from "react";
import "./HazardViewComponent.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Images from "./components/Images";

const IMAGETYPE = ["BackScatter", "Interferogram", "Coherence"];
const RECTIFICATION = ["Georectified", "Orthorectified"];

const FILTER = IMAGETYPE.concat(RECTIFICATION);

export default class HazardViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hazardId: "VolcanoName", //temporary value; will be set to this.props.hazardId
      filter: FILTER.reduce(
        (options, option) => ({
          ...options,
          [option]: true
        }),
        {}
      )
    };

    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filterOptions) {
    console.log(filterOptions);

    this.setState({
      filter: filterOptions
    });

    console.log(this.state.filter);
  }

  render() {
    return (
      <div className="HazardViewComponent container-fluid">
        <div class="row">
          <div class="sidebar">
            <Sidebar
              action={this.filterHandler}
              checkboxes={this.state.filter}
            />
          </div>
          <div class="col-sm-12">
            <Header id={this.state.hazardId} />
            <Images id={this.state.hazardId} filter={this.state.filter} />
          </div>
        </div>
      </div>
    );
  }
}
