import React, { Component } from 'react';


class LeftSideBar extends Component {
    render() {
        return (
            <div>
                <aside className="asideFlexContainer">
                    <button><i class="fas fa-thumbtack"></i></button>
                    <button><i class="fas fa-thumbtack"></i></button>
                    <button><i class="fas fa-chart-bar"></i></button>
                    <button><i class="fas fa-mail-bulk"></i></button>
                    <button><i class="fas fa-shapes"></i></button>
                    <button><i class="fas fa-mail-bulk"></i></button>
                </aside>
            </div>
        );
    }
}

export default LeftSideBar; 