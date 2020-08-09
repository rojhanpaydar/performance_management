import React, { Component } from 'react';
import data from "./data.json";
import './App.css';
import Cards from "./Cards";
import Nav from "./Nav";
import LeftSideBar from "./LeftSideBar";
import Filters from "./Filters";
import Charts from "./Charts";
import './sass/_setup.scss';
import './sass/_headerFonts.scss';
import './sass/_nav.scss';
import './sass/_aside.scss';
import './sass/_squares.scss';
import './sass/_sections.scss';
import './sass/_charts.scss';
import './sass/_mediaQueries.scss';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: "Initial Value",
      gaugeData: [],
      areaData: {},
      name: "",
      score: 72,
      vsly: null,
      sample: 133,

    };
  }

  Cards = (props) => {
    const handleChange = e =>
      props.handleInputValue(e.target.value);

    return (
      <Cards onChange={handleChange} />
    )
  }

  Charts = props => (
    <div>
      <div>{props.inputValue}</div>
    </div>
  )

  handleInputValue = (inputValue) =>
    this.setState({ inputValue })

  render() {

    return (
      <div>
        <Nav />
        <LeftSideBar />
        <div>
          <h1 className="wrapper">Performance Management</h1>
          <div className="greySquare">
            <h2 className="wrapper"><i className="fas fa-globe"></i> Diagnostic Tool <i className="fas fa-thumbtack"></i></h2>
          </div>
          <div className="leftSection">
            <Filters />
            {console.log(data)}
            <Cards handleInputValue={this.handleInputValue} />
          </div>
          <div className="rightSection">
            <Charts inputValue={this.state.inputValue} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
