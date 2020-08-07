import React, { Component } from 'react';
import data from "./data.json";
import ReactApexCharts from "react-apexcharts";




class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: [44, 55, 41, 17, 15],
            options: {
                chart: {
                    type: 'donut',
                },
            }
        }
    }




    render() {
        return (

            <div className="wrapper">
                <ul className="cardsSection">
                    <div class="card">
                        {
                            data.gaugeData.map((cardData) => {
                                {
                                    var options = {
                                        chart: {
                                            type: 'donut'
                                        },
                                        series: [{
                                            name: 'sales',
                                            data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
                                        }],
                                        xaxis: {
                                            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                                        }
                                    }

                                    var chart = new ReactApexCharts(document.querySelector("#chart"), options);

                                    chart.render();

                                }
                                return (
                                    <li>
                                        {cardData.name}
                                        {cardData.score}
                                        {cardData.vsly}
                                        {cardData.sample}
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