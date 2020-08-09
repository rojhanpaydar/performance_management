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
                // dataLabels: {
                //     enabled: false
                // },
                // plotOptions: {
                //     pie: {
                //         donut: {
                //             labels: {
                //                 show: true,
                //                 total: {
                //                     showAlways: true,
                //                 }
                //             }
                //         }

                //     }
                // },
                // responsive: [{
                //     breakpoint: 480,
                //     options: {
                //         chart: {
                //             width: 200
                //         },
                //         legend: {
                //             position: 'bottom'
                //         }
                //     }
                // }]
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
                                    <li onClick={this.charts}>
                                        {/* {cardData.name}
                                        {cardData.score} */}
                                        <div id="chart">
                                            <ReactApexChart options={this.state.options} series={[cardData.score]} type="radialBar" />
                                        </div>
                                        {/* {cardData.vsly}
                                        {cardData.sample} */}
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