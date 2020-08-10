import React, { Component } from 'react';
import data from "./data.json";
import ReactApexChart from "react-apexcharts";
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [data.gaugeData.vsly],
            currentChart: "",
            options: {
                chart: {
                    type: 'radialBar',
                    height: 350,
                },
            },
        };
    }
    charts = () => {
        this.setState()
        console.log(this.props);
        return (
            {}
        )
    }
    render() {
        return (
            <div className="wrapper">
                <ul className="cardsSection">
                    <div class="card">
                        {
                            data.gaugeData.map((cardData) => {
                                return (
                                    <li onClick={() => this.props.handleInputValue(cardData)} key={cardData.name} id="chart">
                                        <p>{cardData.name}</p>
                                        <ReactApexChart options={this.state.options} series={[cardData.score]} type="radialBar" />
                                        <p>{cardData.vsly}</p>
                                        <p>{cardData.sample}</p>
                                    </li>

                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        );
    }
}
export default Cards;

