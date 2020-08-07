import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <div className="wrapper">
                <h3>Filters</h3>
                <div className="box">
                    <ul>
                        <li><div className="square"></div>All CQA Results <i class="fas fa-info-circle"></i></li>
                        <li><div className="square"></div>CQAs with Closed Loop <i class="fas fa-info-circle"></i></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filters;