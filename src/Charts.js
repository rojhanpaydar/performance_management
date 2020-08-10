import React, { Component } from 'react';
import data from "./data.json";
import ReactApexChart from "react-apexcharts";
class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [{
                data: [93, 43, 34, 0],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Apr', 'May', 'Jun', 'Jul'],
                }
            },
        };
    }
    static getDerivedStateFromProps(props, state) {
        if (props.inputValue !== state.series[0].data) {
            return {
                series: [{
                    ...state.series.name,
                    data: props.inputValue
                }]
            }
        }
    }
    render() {
        return (

            <div className="charts chartWrapper">

                <h4> trends</h4>
                <ul>
                    <li><button>Day</button></li>
                    <li><button>Week</button></li>
                    <li><button>Month</button></li>
                    <li><button>Quarter</button></li>
                    <li><button>Half</button></li>
                    <li><button>Year</button></li>
                </ul>

                <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                </div>
            </div>
        );
    }
}
export default Charts;