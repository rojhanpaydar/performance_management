import React, { Component } from 'react';

class Charts extends Component {
    render() {
        return (
            <div className="charts">
                <h4>quality score trends</h4>
                <ul>
                    <li><button>Day</button></li>
                    <li><button>Week</button></li>
                    <li><button>Month</button></li>
                    <li><button>Quarter</button></li>
                    <li><button>Half</button></li>
                    <li><button>Year</button></li>
                </ul>
            </div>
        );
    }
}

export default Charts;