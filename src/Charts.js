import React, { Component } from 'react';
import data from "./data.json";
import ReactApexChart from "react-apexcharts";

class Charts extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                }
            },


        };
    }



    render() {
        return (



            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>



        );
    }
}



// class Charts extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             markers: {
//                 size: 0,
//                 colors: undefined,
//                 strokeColors: '#fff',
//                 strokeWidth: 2,
//                 strokeOpacity: 0.9,
//                 strokeDashArray: 0,
//                 fillOpacity: 1,
//                 discrete: [],
//                 shape: "circle",
//                 radius: 2,
//                 offsetX: 0,
//                 offsetY: 0,
//                 onClick: undefined,
//                 onDblClick: undefined,
//                 showNullDataPoints: true,
//                 hover: {
//                     size: undefined,
//                     sizeOffset: 3
//                 }
//             }
//         };
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     data.areaData.map((chartData) => {
//                         return (
//                             <div id="chart">
//                                 <ReactApexChart options={this.state.markers} markers={[chartData.markers]} type="" />


//                                 <div className="charts">
//                                     <h4>quality score trends</h4>
//                                     <ul>
//                                         <li><button>Day</button></li>
//                                         <li><button>Week</button></li>
//                                         <li><button>Month</button></li>
//                                         <li><button>Quarter</button></li>
//                                         <li><button>Half</button></li>
//                                         <li><button>Year</button></li>
//                                     </ul>
//                                 </div>
//                             </div>

//                         )

//                     })
//                 }
//             </div>

//         );
//     }

// }

export default Charts;