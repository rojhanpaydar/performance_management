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
      inputValue: [],
      gaugeData: [],
      areaData: {},
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
  handleInputValue = (val) => {
    const object = data.areaData[val.name]
    const chartData = object.map(item => {
      return item.score;
    })
    this.setState({ inputValue: chartData })
  }
  render() {
    console.log(this.state.inputValue, "chart data")
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
            <Cards handleInputValue={(val) => this.handleInputValue(val)} />
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